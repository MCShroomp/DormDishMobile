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

export function MenuPage({
    category,
    setCategory,
    query,
    setQuery,
    sort,
    setSort,
    items,
    onSelect,
    onAdd,
    favorites,
    onFavorite,
    onCart,
    cartCount
}) {
    return (
        <>
            <div className="page-title-row">
                <div>
                    <div className="eyebrow">
                        MADE FRESH, JUST FOR YOU
                    </div>

                    <h1>Explore the menu</h1>

                    <p className="page-subtitle">
                        Find something good for your next break.
                    </p>
                </div>

                <button
                    className="cart-shortcut"
                    onClick={onCart}
                >
                    <ShoppingCart size={19} />

                    <span>Cart</span>

                    {cartCount > 0 && <b>{cartCount}</b>}
                </button>
            </div>

            <div className="menu-toolbar">
                <label className="search-box">
                    <Search size={18} />

                    <input
                        value={query}
                        onChange={(event) =>
                            setQuery(event.target.value)
                        }
                        placeholder="Search meals, snacks..."
                    />

                    <kbd>⌘ K</kbd>
                </label>

                <label className="sort-select">
                    <SlidersHorizontal size={17} />

                    <select
                        value={sort}
                        onChange={(event) =>
                            setSort(event.target.value)
                        }
                        aria-label="Sort menu"
                    >
                        <option value="featured">
                            Featured
                        </option>

                        <option value="low">
                            Price: low to high
                        </option>

                        <option value="high">
                            Price: high to low
                        </option>
                    </select>

                    <ChevronDown size={15} />
                </label>
            </div>

            <div className="category-pills">
                {categories.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.name}
                            className={`category-pill ${
                                category === item.name
                                    ? 'active'
                                    : ''
                            }`}
                            onClick={() =>
                                setCategory(item.name)
                            }
                        >
                            <Icon size={16} />
                            {item.name}
                        </button>
                    );
                })}
            </div>

            <div className="menu-results-row">
                <span>
                    <strong>{items.length}</strong>{' '}
                    items to make your day
                </span>

                <span>
                    <span className="open-dot" />
                    Canteen menu preview
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
                        <Search size={25} />
                    </span>

                    <h3>No meals found</h3>

                    <p>
                        Try another search or switch categories.
                    </p>

                    <button
                        className="secondary-button"
                        onClick={() => {
                            setQuery('');
                            setCategory('All');
                        }}
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </>
    );
}
