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

export function HomePage({
    onNavigate,
    onSelect,
    onAdd,
    favorites,
    onFavorite,
    onCart,
    cartCount
}) {
    return (
        <>
            <div className="welcome-row">
                <div>
                    <div className="eyebrow">
                        <span className="status-dot" />
                        YOUR CAMPUS, YOUR CRAVINGS
                    </div>

                    <h1>
                        Good food. <span>Better days.</span>
                    </h1>

                    <p className="page-subtitle">
                        Your next favorite meal is just a few taps away.
                    </p>
                </div>

                <button
                    className="cart-shortcut"
                    onClick={onCart}
                >
                    <ShoppingCart size={19} />

                    <span>Your cart</span>

                    {cartCount > 0 && <b>{cartCount}</b>}
                </button>
            </div>

            <section className="hero-banner">
                <div className="hero-copy">
                    <span className="hero-pill">
                        <Sparkles size={13} />
                        FRESH FROM THE CANTEEN
                    </span>

                    <h2>
                        Big cravings.
                        <br />
                        Small prices.
                    </h2>

                    <p>
                        Delicious campus meals that keep you going,
                        even on your busiest days.
                    </p>

                    <button
                        className="hero-cta"
                        onClick={() => onNavigate('menu')}
                    >
                        Explore today’s menu
                        <ArrowRight size={16} />
                    </button>

                    <div className="hero-social-proof">
                        <div className="mini-avatars">
                            <span>E</span>
                            <span>R</span>
                            <span>L</span>
                        </div>

                        <span>
                            <strong>Made for students</strong>
                            <br />
                            Easy ordering, less waiting
                        </span>
                    </div>
                </div>

                <div className="hero-art">
                    <div className="hero-glow" />

                    <img
                        src="/images/hero-food.png"
                        alt="A freshly prepared meal"
                    />

                    <div className="floating-rating">
                        <span>★</span>

                        <div>
                            <strong>4.9/5</strong>
                            <small>Student approved</small>
                        </div>
                    </div>

                    <div className="floating-note">
                        <Flame size={16} />

                        <span>
                            Freshly made
                            <br />
                            <strong>Every day</strong>
                        </span>
                    </div>
                </div>

                <div className="hero-shape shape-one" />
                <div className="hero-shape shape-two" />
            </section>

            <section className="quick-info-grid">
                <InfoCard
                    icon={Clock3}
                    title="Skip the line"
                    text="Order ahead and save your break."
                />

                <InfoCard
                    icon={PackageCheck}
                    title="Know your order"
                    text="Keep your orders in one place."
                />

                <InfoCard
                    icon={MapPin}
                    title="Campus-ready"
                    text="Meals made for campus life."
                />
            </section>

            <section className="section-block">
                <SectionHeading
                    eyebrow="THE CROWD FAVORITES"
                    title="Popular right now"
                    description="Student-loved meals worth the break."
                    action="See full menu"
                    onAction={() => onNavigate('menu')}
                />

                <div className="product-grid home-product-grid">
                    {products.slice(0, 4).map((item) => (
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
            </section>

            <section className="bottom-promo">
                <div className="promo-icon">
                    <ChefHat size={23} />
                </div>

                <div>
                    <strong>
                        Your lunch break deserves better.
                    </strong>

                    <p>
                        Explore the full menu and find your next
                        go-to meal.
                    </p>
                </div>

                <button onClick={() => onNavigate('menu')}>
                    Browse menu
                    <ArrowRight size={16} />
                </button>
            </section>
        </>
    );
}

export function InfoCard({
    icon: Icon,
    title,
    text
}) {
    return (
        <div className="info-card">
            <span className="info-icon">
                <Icon size={19} />
            </span>

            <div>
                <strong>{title}</strong>
                <p>{text}</p>
            </div>
        </div>
    );
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    action,
    onAction
}) {
    return (
        <div className="section-heading">
            <div>
                <div className="eyebrow">
                    {eyebrow}
                </div>

                <h2>{title}</h2>

                {description && (
                    <p>{description}</p>
                )}
            </div>

            {action && (
                <button
                    className="text-action"
                    onClick={onAction}
                >
                    {action}
                    <ArrowRight size={16} />
                </button>
            )}
        </div>
    );
}
