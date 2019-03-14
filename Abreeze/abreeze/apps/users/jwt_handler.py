import uuid
import warnings


from calendar import timegm
from datetime import datetime

from rest_framework_jwt.compat import get_username
from rest_framework_jwt.compat import get_username_field
from rest_framework_jwt.settings import api_settings

def jwt_response_payload_handler(token, user=None, request=None):
    if user.is_superuser:
        auth=1
    else:
        auth=2

    return {
        'code':200,
        'message':'登录成功',
        'auth':auth,
        'token': token,
        'user': user.username
    }

def jwt_payload_handler(user):
    username_field = get_username_field()
    username = get_username(user)

    warnings.warn(
        'The following fields will be removed in the future: '
        '`email` and `user_id`. ',
        DeprecationWarning
    )

    payload = {
        'userId': user.pk,
        'username': username,
        'exp': datetime.utcnow() + api_settings.JWT_EXPIRATION_DELTA
    }
    if hasattr(user, 'email'):
        payload['email'] = user.email
    if hasattr(user,'is_superuser'):
        if user.is_superuser:
            payload['auth'] = 1
        else:
            payload['auth'] = 2
    if isinstance(user.pk, uuid.UUID):
        payload['userId'] = str(user.pk)


    payload[username_field] = username

    # Include original issued at time for a brand new token,
    # to allow token refresh
    if api_settings.JWT_ALLOW_REFRESH:
        payload['orig_iat'] = timegm(
            datetime.utcnow().utctimetuple()
        )

    if api_settings.JWT_AUDIENCE is not None:
        payload['aud'] = api_settings.JWT_AUDIENCE

    if api_settings.JWT_ISSUER is not None:
        payload['iss'] = api_settings.JWT_ISSUER

    return payload