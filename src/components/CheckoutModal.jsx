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

export function CheckoutModal({
    cart,
    subtotal,
    delivery,
    total,
    address,
    setAddress,
    payment,
    setPayment,
    onClose,
    onPlace
}) {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <section
                className="checkout-modal"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="checkout-header">
                    <button className="back-button" onClick={onClose}>
                        <ArrowLeft size={19} />
                        Back to cart
                    </button>

                    <button className="icon-button" onClick={onClose}>
                        <X size={19} />
                    </button>
                </div>

                <div className="eyebrow">ALMOST THERE</div>

                <h2>Checkout</h2>

                <p className="page-subtitle">
                    Double-check your details before placing your demo order.
                </p>

                <label className="field-label">
                    Delivery location
                </label>

                <div className="address-field">
                    <MapPin size={19} />

                    <input
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        placeholder="Campus building or pickup point"
                    />

                    <ChevronRight size={17} />
                </div>

                <label className="field-label">
                    Payment method
                </label>

                <div className="payment-options">
                    {['Cash on delivery', 'Pay at pickup'].map((option) => (
                        <button
                            key={option}
                            className={`payment-option ${
                                payment === option ? 'selected' : ''
                            }`}
                            onClick={() => setPayment(option)}
                        >
                            <span className="payment-icon">
                                <CreditCard size={18} />
                            </span>

                            <span>
                                <strong>{option}</strong>

                                <small>
                                    {option === 'Cash on delivery'
                                        ? 'Pay when your order arrives'
                                        : 'Pay directly at the canteen'}
                                </small>
                            </span>

                            <span className="radio-dot">
                                {payment === option && <i />}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="checkout-order-list">
                    <strong>
                        Order summary{' '}
                        <span>
                            {cart.reduce(
                                (sum, item) => sum + item.quantity,
                                0
                            )}{' '}
                            items
                        </span>
                    </strong>

                    {cart.map((item) => (
                        <div key={item.id}>
                            <span>
                                {item.quantity} × {item.name}
                            </span>

                            <span>
                                {money(item.price * item.quantity)}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="checkout-total">
                    <span>Total due</span>
                    <strong>{money(total)}</strong>
                </div>

                <div className="demo-notice">
                    <CircleHelp size={16} />

                    <span>
                        Frontend demo only. This order is saved on this
                        device; no real canteen or payment service is
                        contacted.
                    </span>
                </div>

                <button
                    className="primary-button full-button"
                    onClick={onPlace}
                    disabled={!cart.length || !address.trim()}
                >
                    Place demo order
                    <ArrowRight size={17} />
                </button>

                <p className="checkout-footnote">
                    <CheckCircle2 size={14} />
                    You can review it later in My Orders.
                </p>
            </section>
        </div>
    );
}
