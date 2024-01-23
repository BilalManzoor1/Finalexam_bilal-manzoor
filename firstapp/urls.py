# urls.py
from django.urls import path
from .views import BookListCreateView, BookDetailView

urlpatterns = [
    path('api/books/', BookListCreateView.as_view(), name='book-list-create'),
    path('api/books/<int:pk>/', BookDetailView.as_view(), name='book-detail'),
]
