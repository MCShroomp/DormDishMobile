import React, {
    useEffect,
    useMemo,
    useState
} from 'react';

import {
    ArrowRight,
    Bell,
    Check,
    ChevronDown,
    CircleHelp,
    Heart,
    Home,
    ListOrdered,
    Moon,
    ShoppingCart,
    Sun,
    Utensils,
    UserRound,
    CheckCircle2
} from 'lucide-react';

import {
    products,
    money
} from './data/menu.js';

import {
    NavButton,
    MobileNav
} from './components/Navigation.jsx';

import {
    HomePage,
    InfoCard,
    SectionHeading
} from './pages/HomePage.jsx';

import { MenuPage } from './pages/MenuPage.jsx';
import { OrdersPage } from './pages/OrdersPage.jsx';
import { FavoritesPage } from './pages/FavoritesPage.jsx';
import { ProfilePage } from './pages/ProfilePage.jsx';

import { ProductModal } from './components/ProductModal.jsx';
import { CartDrawer } from './components/CartDrawer.jsx';
import { CheckoutModal } from './components/CheckoutModal.jsx';
import { SplashScreen } from './components/SplashScreen.jsx';

import './styles.css';

export default function App() {
    const [page, setPage] = useState('home');
    const [category, setCategory] = useState('All');
    const [query, setQuery] = useState('');

    const [cart, setCart] = useState(() =>
        JSON.parse(
            localStorage.getItem('dormdish-cart') || '[]'
        )
    );

    const [orders, setOrders] = useState(() =>
        JSON.parse(
            localStorage.getItem('dormdish-orders') || '[]'
        )
    );

    const [favorites, setFavorites] = useState(() =>
        JSON.parse(
            localStorage.getItem('dormdish-favorites') || '[]'
        )
    );

    const [selected, setSelected] = useState(null);
    const [showCart, setShowCart] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const [toast, setToast] = useState('');
    const [dark, setDark] = useState(false);
    const [sort, setSort] = useState('featured');

    const [profileName, setProfileName] = useState(() =>
        localStorage.getItem('dormdish-name') ||
        'Campus Student'
    );

    const [address, setAddress] = useState(() =>
        localStorage.getItem('dormdish-address') ||
        'TIPQC Main Building'
    );

    const [payment, setPayment] = useState(
        'Cash on delivery'
    );

    const [orderPlaced, setOrderPlaced] = useState(null);
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        localStorage.setItem(
            'dormdish-cart',
            JSON.stringify(cart)
        );
    }, [cart]);

    useEffect(() => {
        localStorage.setItem(
            'dormdish-orders',
            JSON.stringify(orders)
        );
    }, [orders]);

    useEffect(() => {
        localStorage.setItem(
            'dormdish-favorites',
            JSON.stringify(favorites)
        );
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem(
            'dormdish-name',
            profileName
        );
    }, [profileName]);

    useEffect(() => {
        localStorage.setItem(
            'dormdish-address',
            address
        );
    }, [address]);

    useEffect(() => {
        if (!toast) {
            return;
        }

        const timeout = setTimeout(
            () => setToast(''),
            2400
        );

        return () => clearTimeout(timeout);
    }, [toast]);

    const cartCount = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const delivery = subtotal > 0 ? 20 : 0;
    const total = subtotal + delivery;

    const visibleProducts = useMemo(() => {
        let result = products.filter(
            (item) =>
                (category === 'All' ||
                    item.category === category) &&
                `${item.name} ${item.category}`
                    .toLowerCase()
                    .includes(query.toLowerCase())
        );

        if (sort === 'low') {
            result = [...result].sort(
                (a, b) => a.price - b.price
            );
        }

        if (sort === 'high') {
            result = [...result].sort(
                (a, b) => b.price - a.price
            );
        }

        return result;
    }, [category, query, sort]);

    function addToCart(product, quantity = 1) {
        setCart((current) => {
            const existing = current.find(
                (item) => item.id === product.id
            );

            if (existing) {
                return current.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity + quantity
                          }
                        : item
                );
            }

            return [
                ...current,
                {
                    ...product,
                    quantity
                }
            ];
        });

        setToast(`${product.name} added to cart`);
    }

    function changeQuantity(id, amount) {
        setCart((current) =>
            current
                .map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity + amount
                          }
                        : item
                )
                .filter(
                    (item) => item.quantity > 0
                )
        );
    }

    function toggleFavorite(id) {
        setFavorites((current) =>
            current.includes(id)
                ? current.filter(
                      (item) => item !== id
                  )
                : [...current, id]
        );
    }

    function placeOrder() {
        if (!cart.length) {
            return;
        }

        const order = {
            id: `DD-${Date.now()
                .toString()
                .slice(-6)}`,
            date: new Date().toLocaleString(
                'en-PH',
                {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                }
            ),
            items: cart,
            total,
            status: 'Confirmed',
            payment,
            address
        };

        setOrders((current) => [
            order,
            ...current
        ]);

        setOrderPlaced(order);
        setCart([]);
        setShowCheckout(false);
        setShowCart(false);
        setPage('orders');
        setToast(
            'Your demo order has been placed'
        );
    }

    function navigate(nextPage) {
        setPage(nextPage);
        setSelected(null);
        setShowCart(false);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
    <>
        {showSplash && (
            <SplashScreen
                onComplete={() => setShowSplash(false)}
            />
        )}

        <div
            className={`app-shell ${
                dark ? 'dark' : ''
            }`}
        >
            <header className="topbar">
                <button
                    className="brand"
                    onClick={() => navigate('home')}
                    aria-label="DormDish home"
                >
                    <span className="brand-mark">
                        <Utensils
                            size={19}
                            strokeWidth={2.5}
                        />
                    </span>

                    <span>
                        Dorm<span>Dish</span>
                        <small>
                            Campus dining, simplified
                        </small>
                    </span>
                </button>

                <div className="top-actions">
                    <button
                        className="icon-button theme-toggle"
                        onClick={() =>
                            setDark(!dark)
                        }
                        aria-label="Toggle theme"
                    >
                        {dark ? (
                            <Sun size={19} />
                        ) : (
                            <Moon size={19} />
                        )}
                    </button>

                    <button
                        className="icon-button notification-button"
                        onClick={() =>
                            setToast(
                                'You’re all caught up!'
                            )
                        }
                        aria-label="Notifications"
                    >
                        <Bell size={19} />
                        <i />
                    </button>

                    <button
                        className="profile-chip"
                        onClick={() =>
                            navigate('profile')
                        }
                    >
                        <span className="avatar">
                            {profileName
                                .trim()
                                .charAt(0)
                                .toUpperCase() ||
                                'S'}
                        </span>

                        <span className="profile-chip-name">
                            {profileName}
                        </span>

                        <ChevronDown size={15} />
                    </button>
                </div>
            </header>

            <div className="layout">
                <aside className="sidebar">
                    <div className="sidebar-label">
                        YOUR SPACE
                    </div>

                    <NavButton
                        icon={Home}
                        label="Home"
                        active={page === 'home'}
                        onClick={() =>
                            navigate('home')
                        }
                    />

                    <NavButton
                        icon={Utensils}
                        label="Explore menu"
                        active={page === 'menu'}
                        onClick={() =>
                            navigate('menu')
                        }
                    />

                    <NavButton
                        icon={ListOrdered}
                        label="My orders"
                        active={page === 'orders'}
                        onClick={() =>
                            navigate('orders')
                        }
                        badge={
                            orders.length || null
                        }
                    />

                    <NavButton
                        icon={Heart}
                        label="Favorites"
                        active={
                            page === 'favorites'
                        }
                        onClick={() =>
                            navigate('favorites')
                        }
                    />

                    <div className="sidebar-label sidebar-label-spaced">
                        ACCOUNT
                    </div>

                    <NavButton
                        icon={UserRound}
                        label="My profile"
                        active={page === 'profile'}
                        onClick={() =>
                            navigate('profile')
                        }
                    />

                    <div className="sidebar-help">
                        <div className="help-icon">
                            <CircleHelp size={19} />
                        </div>

                        <strong>
                            Need a hand?
                        </strong>

                        <p>
                            Questions about your
                            campus order?
                        </p>

                        <button
                            onClick={() =>
                                setToast(
                                    'Contact your campus canteen for order support.'
                                )
                            }
                        >
                            Get help
                            <ArrowRight size={14} />
                        </button>
                    </div>

                    <div className="sidebar-footer">
                        © 2026 DormDish PH
                        <br />
                        <span>
                            Made for campus life
                        </span>
                    </div>
                </aside>

                <main className="main-content">
                    {page === 'home' && (
                        <HomePage
                            onNavigate={navigate}
                            onSelect={setSelected}
                            onAdd={addToCart}
                            favorites={favorites}
                            onFavorite={
                                toggleFavorite
                            }
                            onCart={() =>
                                setShowCart(true)
                            }
                            cartCount={cartCount}
                        />
                    )}

                    {page === 'menu' && (
                        <MenuPage
                            category={category}
                            setCategory={
                                setCategory
                            }
                            query={query}
                            setQuery={setQuery}
                            sort={sort}
                            setSort={setSort}
                            items={visibleProducts}
                            onSelect={setSelected}
                            onAdd={addToCart}
                            favorites={favorites}
                            onFavorite={
                                toggleFavorite
                            }
                            onCart={() =>
                                setShowCart(true)
                            }
                            cartCount={cartCount}
                        />
                    )}

                    {page === 'orders' && (
                        <OrdersPage
                            orders={orders}
                            onBrowse={() =>
                                navigate('menu')
                            }
                            onReorder={(order) => {
                                order.items.forEach(
                                    (item) =>
                                        addToCart(
                                            item,
                                            item.quantity
                                        )
                                );

                                navigate('menu');
                            }}
                        />
                    )}

                    {page === 'favorites' && (
                        <FavoritesPage
                            items={products.filter(
                                (item) =>
                                    favorites.includes(
                                        item.id
                                    )
                            )}
                            onSelect={setSelected}
                            onAdd={addToCart}
                            onBrowse={() =>
                                navigate('menu')
                            }
                            onFavorite={
                                toggleFavorite
                            }
                            favorites={favorites}
                        />
                    )}

                    {page === 'profile' && (
                        <ProfilePage
                            profileName={profileName}
                            setProfileName={
                                setProfileName
                            }
                            address={address}
                            setAddress={setAddress}
                            orders={orders}
                            favorites={favorites}
                            onSave={() =>
                                setToast(
                                    'Your profile has been saved'
                                )
                            }
                            onOrders={() =>
                                navigate('orders')
                            }
                        />
                    )}
                </main>
            </div>

            <nav className="mobile-nav">
                <MobileNav
                    icon={Home}
                    label="Home"
                    active={page === 'home'}
                    onClick={() =>
                        navigate('home')
                    }
                />

                <MobileNav
                    icon={Utensils}
                    label="Menu"
                    active={page === 'menu'}
                    onClick={() =>
                        navigate('menu')
                    }
                />

                <MobileNav
                    icon={ShoppingCart}
                    label="Cart"
                    active={showCart}
                    onClick={() =>
                        setShowCart(true)
                    }
                    badge={cartCount}
                />

                <MobileNav
                    icon={ListOrdered}
                    label="Orders"
                    active={page === 'orders'}
                    onClick={() =>
                        navigate('orders')
                    }
                />

                <MobileNav
                    icon={UserRound}
                    label="Profile"
                    active={page === 'profile'}
                    onClick={() =>
                        navigate('profile')
                    }
                />
            </nav>

            {selected && (
                <ProductModal
                    product={selected}
                    onClose={() =>
                        setSelected(null)
                    }
                    onAdd={(product, qty) => {
                        addToCart(product, qty);
                        setSelected(null);
                    }}
                    favorite={favorites.includes(
                        selected.id
                    )}
                    onFavorite={() =>
                        toggleFavorite(
                            selected.id
                        )
                    }
                />
            )}

            {showCart && (
                <CartDrawer
                    cart={cart}
                    subtotal={subtotal}
                    delivery={delivery}
                    total={total}
                    onClose={() =>
                        setShowCart(false)
                    }
                    onChange={changeQuantity}
                    onRemove={(id) =>
                        setCart((current) =>
                            current.filter(
                                (item) =>
                                    item.id !== id
                            )
                        )
                    }
                    onCheckout={() => {
                        setShowCart(false);
                        setShowCheckout(true);
                    }}
                    onBrowse={() =>
                        navigate('menu')
                    }
                />
            )}

            {showCheckout && (
                <CheckoutModal
                    cart={cart}
                    subtotal={subtotal}
                    delivery={delivery}
                    total={total}
                    address={address}
                    setAddress={setAddress}
                    payment={payment}
                    setPayment={setPayment}
                    onClose={() =>
                        setShowCheckout(false)
                    }
                    onPlace={placeOrder}
                />
            )}

            {orderPlaced && (
                <div
                    className="modal-backdrop"
                    onClick={() =>
                        setOrderPlaced(null)
                    }
                >
                    <section
                        className="success-modal"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >
                        <div className="success-icon">
                            <CheckCircle2
                                size={38}
                            />
                        </div>

                        <h2>Order placed!</h2>

                        <p>
                            Your demo order{' '}
                            <strong>
                                {orderPlaced.id}
                            </strong>{' '}
                            is confirmed.
                        </p>

                        <div className="success-summary">
                            <span>
                                Order total
                            </span>

                            <strong>
                                {money(
                                    orderPlaced.total
                                )}
                            </strong>
                        </div>

                        <button
                            className="primary-button full-button"
                            onClick={() =>
                                setOrderPlaced(
                                    null
                                )
                            }
                        >
                            View my orders
                            <ArrowRight size={17} />
                        </button>
                    </section>
                </div>
            )}

            {toast && (
                <div className="toast-message">
                    <Check size={17} />
                    {toast}
                </div>
            )}
                </div>
    </>
    );
}
