
# React Contact Management System

A React application for managing contacts with features like adding, editing, and viewing contacts. The application also includes a dashboard with visualizations and a map to display COVID-19 statistics.

## Features

- **Contact Management**: Add, edit, and view contacts.
- **Dashboard**: Visualize COVID-19 data with a line chart showing cases, deaths, and recoveries.
- **Map**: Display COVID-19 data on a map with markers for each country.
- **Loading Animation**: Pac-Man loader animation displayed during initial loading.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling routing within the application.
- **Chart.js**: For creating interactive charts.
- **Leaflet**: For displaying maps and markers.
- **React Query**: For data fetching and caching.
- **React Spinners**: For displaying loading animations.
- **Tailwind CSS**: For styling and layout.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kanhaiya8608/taiyo_assess.git
   cd taiyo_assess
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_API_URL=https://disease.sh/v3/covid-19
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

- **Home Page**: Lists all contacts with options to add or edit.
- **Add Contact**: Navigate to `/add` to add a new contact.
- **Edit Contact**: Navigate to `/edit/:id` to edit an existing contact.
- **Dashboard**: Navigate to `/dashboard` to view COVID-19 statistics.

## Components

- **Navbar**: Navigation bar for routing between pages.
- **ContactList**: Displays a list of contacts.
- **ContactForm**: Form for adding or editing contacts.
- **Dashboard**: Displays charts and maps for COVID-19 data.
- **CovidMap**: Map showing COVID-19 data for different countries.

## Environment Variables

- **VITE_API_URL**: The base URL for API requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes. Contributions are welcome!

## Contact

For questions or feedback, please contact [kanhaiya831998@gmail.com](mailto:kanhaiya831998@gmail.com).

