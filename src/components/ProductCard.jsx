import {
    ArrowLeft,
    ArrowRight,
    Bell,
    Check,
    ChefHat,
    ChevronDown,
    ChevronRight,
    Clock3,
    CreditCard,
    Flame,
    Heart,
    Home,
    ListOrdered,
    MapPin,
    Minus,
    PackageCheck,
    Plus,
    Search,
    ShoppingBag,
    ShoppingCart,
    SlidersHorizontal,
    Sparkles,
    Sun,
    UserRound,
    Utensils,
    X,
    Moon,
    CircleHelp,
    LogIn,
    LogOut,
    Trash2,
    Bike,
    CheckCircle2
} from 'lucide-react';

import { money } from "../data/menu.js";

export function ProductCard({
    product,
    onSelect,
    onAdd,
    favorite,
    onFavorite
}) {
    return (
        <article className="product-card">
            <button
                className="product-image-button"
                onClick={() => onSelect(product)}
                aria-label={`View ${product.name}`}
            >
                <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                />

                <span className="product-tag">
                    {product.tag}
                </span>
            </button>

            <button
                className={`favorite-button ${
                    favorite ? 'favorited' : ''
                }`}
                onClick={() => onFavorite(product.id)}
                aria-label="Toggle favorite"
            >
                <Heart
                    size={17}
                    fill={favorite ? 'currentColor' : 'none'}
                />
            </button>

            <div className="product-details">
                <div className="product-meta">
                    <span className="product-category">
                        {product.category}
                    </span>

                    <span className="rating">
                        ★ {product.rating}
                    </span>
                </div>

                <button
                    className="product-name"
                    onClick={() => onSelect(product)}
                >
                    {product.name}
                </button>

                <div className="product-description">
                    {product.description}
                </div>

                <div className="product-bottom">
                    <div>
                        <strong>
                            {money(product.price)}
                        </strong>

                        {product.oldPrice && (
                            <del>
                                {money(product.oldPrice)}
                            </del>
                        )}
                    </div>

                    <button
                        className="add-button"
                        onClick={() => onAdd(product)}
                        aria-label={`Add ${product.name} to cart`}
                    >
                        <Plus size={19} />
                    </button>
                </div>
            </div>
        </article>
    );
}
