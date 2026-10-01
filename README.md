# DormDish Mobile

A mobile-first React + Vite frontend prototype based on the existing DormDish project. It is designed to run locally in VS Code and intentionally uses local demo data only. No PHP API, database, login service, or real payment integration is called.

## Run in VS Code

1. Install Node.js LTS if it is not installed.
2. Extract this folder and open `DormDishMobile` in VS Code.
3. Open the integrated terminal in this folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL Vite prints, usually `http://localhost:5173`.

To test on a phone connected to the same Wi-Fi, run `npm run dev -- --host 0.0.0.0` and open the Network URL printed by Vite on your phone.

## Included frontend flows

- Home dashboard and featured meals
- Menu search, category filters, and price sorting
- Product detail modal, quantity selection, and favorites
- Cart drawer and local demo checkout
- Local demo order history and reorder action
- Editable profile name and campus location
- Light/dark theme toggle on larger screens
- Responsive desktop, tablet, and mobile layouts with mobile bottom navigation
- Cart, favorites, orders, and profile details saved to browser localStorage

## Before backend integration

All menu data and order behavior are mock frontend state. Prices and item availability are sample data. Connect the UI to the PHP API and database later; the checkout explicitly tells the user it is a local demo and does not process payments or contact a canteen.


## Project structure

```text
src/
    App.jsx
    main.jsx
    styles.css
    data/
        menu.js
    components/
        CartDrawer.jsx
        CheckoutModal.jsx
        Navigation.jsx
        ProductCard.jsx
        ProductModal.jsx
    pages/
        FavoritesPage.jsx
        HomePage.jsx
        MenuPage.jsx
        OrdersPage.jsx
        ProfilePage.jsx
```

The app shell and shared state live in `App.jsx`. Each main page is in its own file, reusable UI is in `components/`, and sample menu data is in `data/menu.js`. JavaScript and JSX files use four-space indentation.
