import xadmin
from .models import Comment,Reply


class AllComment:
    pass

class AllReply:
    pass

xadmin.site.register(Comment,AllComment)
xadmin.site.register(Reply,AllReply)






