document.getElementById('mobile-menu').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('active');
    document.getElementById('search-container1').classList.toggle('active');
    document.getElementById('nav-icons').classList.toggle('active');
});





document.addEventListener('DOMContentLoaded', function() {
    // Sample store data
    const stores = [
        {
            id: 1,
            name: "SoleCulture Town",
            address: "123 Okigwe Road, Owerri, Imo State",
            distance: "0.5",
            hours: "Mon-Fri: 10AM-9PM, Sat-Sun: 10AM-8PM",
            phone: "(+234) 90699-60720",
            coordinates: { lat: 40.7128, lng: -74.0060 }
        },
        {
            id: 2,
            name: "SoleCulture Stores",
            address: "456 house, New Owerri",
            distance: "1.2",
            hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
            phone: "(+234) 5505-56785",
            coordinates: { lat: 40.7235, lng: -74.0012 }
        },
        {
            id: 3,
            name: "SoleCulture Upper West Estate",
            address: "78 Federal housing estate",
            distance: "2.8",
            hours: "Mon-Sat: 10AM-8PM, Sun: 11AM-6PM",
            phone: "(+234) 81325-58256",
            coordinates: { lat: 40.7870, lng: -73.9754 }
        }
    ];

    const storeList = document.querySelector('.store-list');
    const locationSearch = document.getElementById('location-search');
    const searchBtn = document.getElementById('search-btn');
    const useLocationBtn = document.getElementById('use-location-btn');
    const distanceFilter = document.getElementById('distance-filter');
    const getDirectionsBtn = document.getElementById('get-directions-btn');
    let selectedStoreId = null;

    // Render store list
    function renderStores(storesToRender) {
        storeList.innerHTML = '';
        
        storesToRender.forEach(store => {
            const storeItem = document.createElement('div');
            storeItem.className = 'store-item';
            storeItem.innerHTML = `
                <h3>${store.name}</h3>
                <p class="store-address">${store.address}</p>
                <p class="store-distance">${store.distance} miles away</p>
                <div class="store-info">
                    <p><i class="far fa-clock"></i> ${store.hours}</p>
                    <p><i class="fas fa-phone"></i> ${store.phone}</p>
                </div>
                <button class="view-details-btn" data-id="${store.id}">View Details</button>
            `;
            storeList.appendChild(storeItem);
        });

        // Add event listeners to view details buttons
        document.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const storeId = parseInt(this.getAttribute('data-id'));
                selectStore(storeId);
            });
        });
    }

    // Select a store
    function selectStore(storeId) {
        selectedStoreId = storeId;
        const store = stores.find(s => s.id === storeId);
        
        // Update UI to show selected store
        document.querySelectorAll('.store-item').forEach(item => {
            item.style.backgroundColor = item.querySelector('.view-details-btn').getAttribute('data-id') == storeId 
                ? '#f9f9f9' 
                : 'white';
        });

        // Enable get directions button
        getDirectionsBtn.disabled = false;
        
        // In a real app, you would update the map to show the selected store
        console.log('Selected store:', store);
    }

    // Filter stores by distance
    function filterStores() {
        const maxDistance = parseFloat(distanceFilter.value);
        return stores.filter(store => parseFloat(store.distance) <= maxDistance);
    }

    // Search stores by location
    function searchStores(query) {
        if (!query) return stores;
        return stores.filter(store => 
            store.address.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Use geolocation to find nearby stores
    function useMyLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    // In a real app, you would use the coordinates to find nearby stores
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    alert(`Location found! Latitude: ${userLocation.lat}, Longitude: ${userLocation.lng}`);
                    // For demo, just show all stores
                    renderStores(filterStores());
                },
                error => {
                    alert("Unable to retrieve your location. Please try searching by address.");
                    console.error("Geolocation error:", error);
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    }

    // Event listeners
    searchBtn.addEventListener('click', () => {
        renderStores(searchStores(locationSearch.value));
    });

    useLocationBtn.addEventListener('click', useMyLocation);

    distanceFilter.addEventListener('change', () => {
        renderStores(filterStores());
    });

    getDirectionsBtn.addEventListener('click', () => {
        if (selectedStoreId) {
            const store = stores.find(s => s.id === selectedStoreId);
            // In a real app, this would open Google Maps with directions
            alert(`Getting directions to ${store.name} at ${store.address}`);
        }
    });

    // Initialize with all stores
    renderStores(stores);
});

