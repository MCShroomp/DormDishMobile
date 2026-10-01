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

export function NavButton({
    icon: Icon,
    label,
    active,
    onClick,
    badge
}) {
    return (
        <button
            className={`nav-button ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <Icon
                size={19}
                strokeWidth={active ? 2.4 : 1.9}
            />

            <span>{label}</span>

            {badge ? <b>{badge}</b> : null}
        </button>
    );
}

export function MobileNav({
    icon: Icon,
    label,
    active,
    onClick,
    badge
}) {
    return (
        <button
            className={`mobile-nav-item ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <span className="mobile-nav-icon">
                <Icon size={20} />

                {badge > 0 && <i>{badge}</i>}
            </span>

            <span>{label}</span>
        </button>
    );
}
