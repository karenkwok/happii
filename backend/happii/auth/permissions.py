from rest_framework.permissions import BasePermission


class IsAuthenticatedOrReadOnly(BasePermission):
    """
    The request is authenticated as a user, or is a OPTIONS request.
    """

    def has_permission(self, request, view):
        return bool(
            request.method in ["OPTIONS"]
            or request.user
            and request.user.is_authenticated
        )
