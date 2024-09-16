import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import postsData from '../posts.json';

function Blog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    // Handle adding posts to the wishlist
    const handleAddToWishlist = (post) => {
        let favouritePosts = JSON.parse(localStorage.getItem('favouritePosts')) || [];
        favouritePosts.push(post);
        localStorage.setItem('favouritePosts', JSON.stringify(favouritePosts));
        navigate('/wishlist');
    };

    // Handle search input
    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
        setSelectedCategory(''); // Reset category filter when searching
    };

    // Handle category selection
    const handleCategorySelect = (category) => {
        setSelectedCategory(category.toLowerCase());
        setSearchTerm(''); // Reset search input when a category is selected
    };

    // Filter posts based on search term or selected category
    const filteredPosts = postsData.filter((post) => {
        if (selectedCategory) {
            return post.category.toLowerCase() === selectedCategory;
        } else if (searchTerm) {
            return post.category.toLowerCase().includes(searchTerm);
        }
        return true; // Show all posts if no filter is applied
    });

    return (
        <>
        <section className="blog-section">
            <div className="sm1">
                <div className="sm2 position-relative">
                    <input
                        className="search-bar shadow-sm"
                        type="text"
                        placeholder="Enter Any Of the Below Keywords"
                        value={searchTerm}
                        onChange={handleSearchInput}
                    />
                    <i className="bi bi-search"></i>
                </div>
                <div className="search-options mt-3">
                    <button className="category3" onClick={() => handleCategorySelect('Gadgets')}>Gadgets</button>
                    <button className="category2" onClick={() => handleCategorySelect('Latest')}>Latest</button>
                    <button className="category" onClick={() => handleCategorySelect('Career')}>Career</button>
                    <button className="category4" onClick={() => handleCategorySelect('Programming')}>Programming</button>
                </div>
            </div>

            {/* Render filtered posts */}
            {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                    <div key={post.id} className="">
                        <div className="blog-post topic d-flex flex-column position-relative">
                            <p className="category-n">{post.category}</p>
                            <div className="read">
                                <Link className="read-text" to={`/blog/${post.id}`}>READ NOW</Link>
                                <i className="bi bi-arrow-right right-arrow"></i>
                            </div>
                            <p className="fs-7">{post.title}</p>
                            <div>
                                <div>
                                    <i className="bi bi-star-fill star"></i>
                                    <i className="bi bi-star-fill star"></i>
                                    <i className="bi bi-star-fill star"></i>
                                    <i className="bi bi-star-fill star"></i>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-calendar-event calendar-icon"></i>
                                    <p>{post.date}</p>
                                </div>
                            </div>
                            <i className="bi bi-bookmark-check-fill ms-2 save-icon" onClick={() => handleAddToWishlist(post)}></i>
                            <p className="fw-bold">By {post.author}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No posts found for this category or search term.</p>
            )}
        </section>
        </>
    );
}

export default Blog;
