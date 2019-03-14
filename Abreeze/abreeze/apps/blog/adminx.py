import xadmin
from .models import Article,Category,Tag


class AllArticle:
    pass

class AllCategory:
    pass

class AllTag:
    pass

xadmin.site.register(Article,AllArticle)
xadmin.site.register(Category,AllCategory)
xadmin.site.register(Tag,AllTag)






