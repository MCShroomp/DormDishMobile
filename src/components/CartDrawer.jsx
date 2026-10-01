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

export function CartDrawer({
    cart,
    subtotal,
    delivery,
    total,
    onClose,
    onChange,
    onRemove,
    onCheckout,
    onBrowse
}) {
    return (
        <div className="drawer-backdrop" onClick={onClose}>
            <aside
                className="cart-drawer"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="drawer-header">
                    <div>
                        <div className="eyebrow">READY WHEN YOU ARE</div>

                        <h2>
                            Your cart{' '}
                            <span>
                                ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                            </span>
                        </h2>
                    </div>

                    <button className="icon-button" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                {cart.length ? (
                    <>
                        <div className="drawer-items">
                            {cart.map((item) => (
                                <div className="cart-line" key={item.id}>
                                    <img src={item.image} alt={item.name} />

                                    <div className="cart-line-content">
                                        <strong>{item.name}</strong>

                                        <span>{money(item.price)} each</span>

                                        <div className="quantity-stepper small-stepper">
                                            <button
                                                onClick={() => onChange(item.id, -1)}
                                                aria-label="Decrease quantity"
                                            >
                                                <Minus size={13} />
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                onClick={() => onChange(item.id, 1)}
                                                aria-label="Increase quantity"
                                            >
                                                <Plus size={13} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cart-line-end">
                                        <strong>
                                            {money(item.price * item.quantity)}
                                        </strong>

                                        <button
                                            className="remove-button"
                                            onClick={() => onRemove(item.id)}
                                            aria-label="Remove item"
                                        >
                                            <Trash2 size={15} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="drawer-summary">
                            <div>
                                <span>Subtotal</span>
                                <strong>{money(subtotal)}</strong>
                            </div>

                            <div>
                                <span>Campus delivery</span>
                                <strong>{money(delivery)}</strong>
                            </div>

                            <div className="summary-total">
                                <span>Total</span>
                                <strong>{money(total)}</strong>
                            </div>

                            <p>
                                <PackageCheck size={15} />
                                Demo checkout · no payment will be processed
                            </p>

                            <button
                                className="primary-button full-button"
                                onClick={onCheckout}
                            >
                                Continue to checkout
                                <ArrowRight size={17} />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="cart-empty">
                        <span>
                            <ShoppingBag size={27} />
                        </span>

                        <h3>Your cart is taking a break</h3>

                        <p>
                            Add a meal or two and we’ll keep everything here for you.
                        </p>

                        <button className="primary-button" onClick={onBrowse}>
                            Explore menu
                            <ArrowRight size={16} />
                        </button>
                    </div>
                )}
            </aside>
        </div>
    );
}
