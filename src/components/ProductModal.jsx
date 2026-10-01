import { useState } from 'react';

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

export function ProductModal({
    product,
    onClose,
    onAdd,
    favorite,
    onFavorite
}) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <section
                className="product-modal"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    className="modal-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <X size={20} />
                </button>

                <div className="modal-product-image">
                    <img
                        src={product.image}
                        alt={product.name}
                    />

                    <span className="product-tag">
                        {product.tag}
                    </span>
                </div>

                <div className="modal-product-content">
                    <div className="product-meta">
                        <span className="product-category">
                            {product.category}
                        </span>

                        <span className="rating">
                            ★ {product.rating}{' '}
                            <span className="rating-count">
                                (student rating)
                            </span>
                        </span>
                    </div>

                    <div className="modal-title-row">
                        <h2>{product.name}</h2>

                        <strong>
                            {money(product.price)}
                        </strong>
                    </div>

                    <p>{product.description}</p>

                    <div className="modal-facts">
                        <span>
                            <Clock3 size={16} />
                            {product.time}
                        </span>

                        <span>
                            <CheckCircle2 size={16} />
                            Available today
                        </span>
                    </div>

                    <div className="modal-actions-row">
                        <div className="quantity-stepper">
                            <button
                                onClick={() =>
                                    setQuantity(
                                        Math.max(1, quantity - 1)
                                    )
                                }
                                aria-label="Decrease quantity"
                            >
                                <Minus size={16} />
                            </button>

                            <span>{quantity}</span>

                            <button
                                onClick={() =>
                                    setQuantity(quantity + 1)
                                }
                                aria-label="Increase quantity"
                            >
                                <Plus size={16} />
                            </button>
                        </div>

                        <button
                            className="favorite-text-button"
                            onClick={onFavorite}
                        >
                            <Heart
                                size={17}
                                fill={
                                    favorite
                                        ? 'currentColor'
                                        : 'none'
                                }
                            />

                            {favorite ? 'Saved' : 'Save'}
                        </button>
                    </div>

                    <button
                        className="primary-button full-button"
                        onClick={() => onAdd(product, quantity)}
                    >
                        Add to cart

                        <span>
                            {money(product.price * quantity)}
                        </span>

                        <ArrowRight size={17} />
                    </button>
                </div>
            </section>
        </div>
    );
}
