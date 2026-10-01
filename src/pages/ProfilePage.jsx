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

export function ProfilePage({
    profileName,
    setProfileName,
    address,
    setAddress,
    orders,
    favorites,
    onSave,
    onOrders
}) {
    return (
        <>
            <div className="eyebrow">
                MAKE IT YOURS
            </div>

            <h1 className="profile-page-title">
                My profile
            </h1>

            <p className="page-subtitle">
                A few details make every order feel easier.
            </p>

            <section className="profile-card">
                <div className="profile-cover">
                    <span className="profile-cover-mark">
                        <Utensils size={25} />
                    </span>
                </div>

                <div className="profile-identity">
                    <div className="large-avatar">
                        {profileName.trim().charAt(0).toUpperCase() || 'S'}
                    </div>

                    <div>
                        <h2>
                            {profileName || 'Campus Student'}
                        </h2>

                        <p>
                            Campus diner{' '}
                            <span className="profile-active-dot" />{' '}
                            Active on this device
                        </p>
                    </div>

                    <span className="demo-badge">
                        DEMO PROFILE
                    </span>
                </div>

                <div className="profile-form">
                    <label
                        className="field-label"
                        htmlFor="profile-name"
                    >
                        Display name
                    </label>

                    <input
                        id="profile-name"
                        className="text-field"
                        value={profileName}
                        onChange={(event) =>
                            setProfileName(event.target.value)
                        }
                        placeholder="What should we call you?"
                    />

                    <label
                        className="field-label"
                        htmlFor="profile-address"
                    >
                        Usual campus location
                    </label>

                    <div className="address-field">
                        <MapPin size={18} />

                        <input
                            id="profile-address"
                            value={address}
                            onChange={(event) =>
                                setAddress(event.target.value)
                            }
                            placeholder="Building, room, or pickup point"
                        />
                    </div>

                    <button
                        className="primary-button save-profile-button"
                        onClick={onSave}
                    >
                        Save changes
                        <Check size={17} />
                    </button>
                </div>
            </section>

            <div className="profile-stats">
                <div>
                    <span className="profile-stat-icon">
                        <ShoppingBag size={18} />
                    </span>

                    <div>
                        <strong>{orders.length}</strong>
                        <span>Orders placed</span>
                    </div>
                </div>

                <div>
                    <span className="profile-stat-icon">
                        <Heart size={18} />
                    </span>

                    <div>
                        <strong>{favorites.length}</strong>
                        <span>Favorite meals</span>
                    </div>
                </div>

                <div>
                    <span className="profile-stat-icon">
                        <MapPin size={18} />
                    </span>

                    <div>
                        <strong>
                            {address.trim() ? 'Set' : 'Add'}
                        </strong>

                        <span>Campus location</span>
                    </div>
                </div>
            </div>

            <button
                className="profile-menu-row"
                onClick={onOrders}
            >
                <span className="profile-row-icon">
                    <ListOrdered size={18} />
                </span>

                <span>
                    <strong>Order history</strong>
                    <small>
                        Review your previous orders
                    </small>
                </span>

                <ChevronRight size={18} />
            </button>

            <div className="profile-demo-note">
                <CircleHelp size={17} />

                <p>
                    This is a local demo profile. Sign-in,
                    account verification, and server sync will
                    be connected when we build the backend.
                </p>
            </div>
        </>
    );
}
