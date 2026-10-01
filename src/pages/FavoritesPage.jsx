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

import {
    products,
    categories,
    money
} from "../data/menu.js";

import { ProductCard } from "../components/ProductCard.jsx";

export function FavoritesPage({
    items,
    onSelect,
    onAdd,
    onBrowse,
    onFavorite,
    favorites
}) {
    return (
        <>
            <div className="page-title-row">
                <div>
                    <div className="eyebrow">
                        SAVED FOR LATER
                    </div>

                    <h1>Your favorites</h1>

                    <p className="page-subtitle">
                        Your usuals, all in one place.
                    </p>
                </div>

                <span className="favorites-total">
                    <Heart size={17} />
                    {items.length} saved
                </span>
            </div>

            {items.length ? (
                <div className="product-grid">
                    {items.map((item) => (
                        <ProductCard
                            key={item.id}
                            product={item}
                            onSelect={onSelect}
                            onAdd={onAdd}
                            favorite={favorites.includes(item.id)}
                            onFavorite={onFavorite}
                        />
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <span>
                        <Heart size={26} />
                    </span>

                    <h3>No favorites just yet</h3>

                    <p>
                        Tap the heart on any meal to keep it close.
                    </p>

                    <button
                        className="primary-button"
                        onClick={onBrowse}
                    >
                        Explore the menu
                        <ArrowRight size={16} />
                    </button>
                </div>
            )}
        </>
    );
}
