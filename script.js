
        // Trip Data
        const tripsData = [
            {
                id: 1,
                name: "Munnar Tea Gardens",
                description: "Experience the breathtaking beauty of Munnar's tea plantations. Walk through lush green tea gardens, visit tea factories, and enjoy stunning mountain views.",
                images: [
                    "https://images.unsplash.com/photo-1593693399741-6c6c44bb7f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1593693399740-6c6c44bb7f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                ],
                status: "upcoming",
                date: "15-17 Nov 2023",
                location: "Munnar, Kerala",
                fullStory: "Our Munnar trip was a magical experience. We started with a sunrise trek through the tea plantations, where the morning mist created an ethereal atmosphere. The group of 12 strangers quickly bonded over shared awe at the stunning landscapes. We visited a century-old tea factory and learned about the tea-making process from leaf to cup. The highlight was definitely the homestay experience with a local family who shared stories about life in the hills. By the end of the trip, what started as a group of strangers had transformed into close friends, planning our next adventure together."
            },
            {
                id: 2,
                name: "Thollayiramkandy Peaks",
                description: "Challenge yourself with this adventurous trek to Thollayiramkandy peaks. Perfect for those seeking adrenaline and panoramic views.",
                images: [
                    "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                ],
                status: "closed",
                date: "5-7 Oct 2023",
                location: "Thollayiramkandy, Kerala",
                fullStory: "The Thollayiramkandy trek pushed us all out of our comfort zones in the best way possible. Our group of 8 adventurers started the steep ascent at dawn, encouraging each other through the challenging sections. When we reached the peak, the 360-degree view of the Western Ghats was absolutely worth every drop of sweat. We shared lunch while watching eagles soar below us. The descent was filled with laughter and stories. This trip proved that shared challenges create the strongest bonds between people who were complete strangers just days before."
            },
            {
                id: 3,
                name: "Wayanad Wilderness",
                description: "Explore the wild side of Wayanad with jungle safaris, waterfall visits, and tribal village experiences.",
                images: [
                    "https://images.unsplash.com/photo-1597079559180-dba435df8f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
                    "https://images.unsplash.com/photo-1597079559181-dba435df8f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
                    "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                ],
                status: "upcoming",
                date: "1-3 Dec 2023",
                location: "Wayanad, Kerala",
                fullStory: "Wayanad offered us a perfect blend of adventure and cultural immersion. Our group of 10 strangers became fast friends as we explored dense forests, discovered hidden waterfalls, and learned about indigenous tribal cultures. The night safari was particularly memorable - spotting wildlife in their natural habitat under the starry sky. We stayed in eco-friendly cottages and enjoyed authentic local cuisine cooked over wood fire. The trip ended with a traditional tribal dance performance around a bonfire, where we all joined in despite having two left feet!"
            },
            {
                id: 4,
                name: "Kodaikanal Hills",
                description: "Discover the princess of hill stations with its serene lakes, pine forests, and breathtaking viewpoints.",
                images: [
                    "https://images.unsplash.com/photo-1615219786005-66c0cf7d4e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1615219786005-66c0cf7d4f12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                ],
                status: "upcoming",
                date: "20-22 Dec 2023",
                location: "Kodaikanal, Tamil Nadu",
                fullStory: "Kodaikanal welcomed us with its cool climate and misty mornings. Our diverse group of travelers from different parts of India bonded over boat rides on the lake, forest walks, and trying local chocolates. The visit to Pillar Rocks at sunset was particularly special as we watched the sky turn orange and pink over the valley. We also explored Coaker's Walk and learned about the unique flora of the region. The trip was filled with laughter, shared meals, and conversations that lasted late into the night."
            },
            {
                id: 5,
                name: "Varkkala Beaches",
                description: "Relax and rejuvenate at Varkkala's stunning cliffs and beaches. Perfect for yoga, meditation, and beach lovers.",
                images: [
                    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
                    "https://images.unsplash.com/photo-1506929562872-bb421503ef22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
                    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
                ],
                status: "closed",
                date: "8-10 Sep 2023",
                location: "Varkkala, Kerala",
                fullStory: "Varkkala was the perfect escape for our group of strangers seeking relaxation and connection. We started each day with sunrise yoga on the cliffs overlooking the Arabian Sea. The beach days were filled with swimming, reading, and getting to know each other's stories. We explored the famous Janardanaswamy Temple and tried Ayurvedic treatments. The evenings were spent watching spectacular sunsets and enjoying fresh seafood at beachside shacks. What made this trip special was the deep conversations and genuine connections formed between people from completely different walks of life."
            }
        ];

        // DOM Elements
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        const recentTripsContainer = document.getElementById('recentTrips');
        const blogTripsContainer = document.getElementById('blogTrips');
        const upcomingTripsContainer = document.getElementById('upcomingTrips');
        const viewAllTripsBtn = document.getElementById('viewAllTrips');
        const whatsappBubble = document.getElementById('whatsappBubble');
        const bookingPage = document.getElementById('booking');
        const bookingTripInfo = document.getElementById('bookingTripInfo');
        const bookingForm = document.getElementById('bookingForm');
        const imageModal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const closeModal = document.getElementById('closeModal');

        // Current booking trip
        let currentBookingTrip = null;

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Load trips data
            loadRecentTrips();
            loadBlogTrips();
            loadUpcomingTrips();
            
            // Setup event listeners
            setupEventListeners();
            
            // Show home page by default
            showPage('home');
        });

        // Load Recent Trips (first 3)
        function loadRecentTrips() {
            recentTripsContainer.innerHTML = '';
            const recentTrips = tripsData.slice(0, 3);
            
            recentTrips.forEach(trip => {
                const tripCard = createTripCard(trip, 'recent');
                recentTripsContainer.appendChild(tripCard);
            });
        }

        // Load All Trips for Blog
        function loadBlogTrips() {
            blogTripsContainer.innerHTML = '';
            
            tripsData.forEach(trip => {
                const blogTrip = createBlogTrip(trip);
                blogTripsContainer.appendChild(blogTrip);
            });
        }

        // Load Upcoming Trips
        function loadUpcomingTrips() {
            upcomingTripsContainer.innerHTML = '';
            const upcomingTrips = tripsData.filter(trip => trip.status === 'upcoming');
            
            upcomingTrips.forEach(trip => {
                const blogTrip = createBlogTrip(trip, true);
                upcomingTripsContainer.appendChild(blogTrip);
            });
        }

        // Create Trip Card for Recent Trips Section
        function createTripCard(trip, type) {
            const card = document.createElement('div');
            card.className = 'trip-card';
            card.dataset.id = trip.id;
            
            let imagesHtml = '';
            if (type === 'recent') {
                // For recent trips, show one image with hover effect
                imagesHtml = `
                    <div class="trip-images">
                        <img src="${trip.images[0]}" alt="${trip.name}" class="trip-img">
                        <div class="trip-status ${trip.status}">${trip.status === 'upcoming' ? 'Upcoming' : 'Completed'}</div>
                    </div>
                `;
            }
            
            card.innerHTML = `
                ${imagesHtml}
                <div class="trip-content">
                    <h3>${trip.name}</h3>
                    <p><strong>Date:</strong> ${trip.date}</p>
                    <p><strong>Location:</strong> ${trip.location}</p>
                    <p>${trip.description}</p>
                    <a href="#" class="read-more view-full-story" data-id="${trip.id}">
                        Read Full Story <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
            
            // Add click event for image to view fullscreen
            const tripImg = card.querySelector('.trip-img');
            if (tripImg) {
                tripImg.addEventListener('click', function() {
                    showImageInModal(trip.images[0]);
                });
            }
            
            return card;
        }

        // Create Blog Trip Element
        function createBlogTrip(trip, isUpcomingPage = false) {
            const blogTrip = document.createElement('div');
            blogTrip.className = 'blog-trip';
            blogTrip.dataset.id = trip.id;
            
            // Create slideshow HTML
            let slidesHtml = '';
            let dotsHtml = '';
            trip.images.forEach((img, index) => {
                const activeClass = index === 0 ? 'active' : '';
                slidesHtml += `<img src="${img}" alt="${trip.name} - Image ${index+1}" class="slide ${activeClass}">`;
                dotsHtml += `<div class="slide-dot ${activeClass}" data-index="${index}"></div>`;
            });
            
            const bookButton = isUpcomingPage ? 
                `<button class="book-slot-btn" data-id="${trip.id}">Book Your Slot</button>` : 
                '';
            
            blogTrip.innerHTML = `
                <div class="blog-trip-images">
                    <div class="slideshow-container">
                        ${slidesHtml}
                        <div class="slide-controls">
                            ${dotsHtml}
                        </div>
                    </div>
                </div>
                <div class="blog-trip-content">
                    <h2>${trip.name}</h2>
                    <p><strong>Date:</strong> ${trip.date}</p>
                    <p><strong>Location:</strong> ${trip.location}</p>
                    <p><strong>Status:</strong> <span class="${trip.status === 'upcoming' ? 'upcoming' : 'closed'}" style="padding: 3px 10px; border-radius: 15px; color: white; font-size: 0.9rem;">${trip.status === 'upcoming' ? 'Upcoming' : 'Completed'}</span></p>
                    <p>${trip.fullStory}</p>
                    ${bookButton}
                </div>
            `;
            
            // Setup slideshow for this trip
            setupSlideshow(blogTrip);
            
            // Add click events for images to view fullscreen
            const slides = blogTrip.querySelectorAll('.slide');
            slides.forEach(slide => {
                slide.addEventListener('click', function() {
                    showImageInModal(this.src);
                });
            });
            
            return blogTrip;
        }

        // Setup Slideshow for Blog Trips
        function setupSlideshow(tripElement) {
            const slides = tripElement.querySelectorAll('.slide');
            const dots = tripElement.querySelectorAll('.slide-dot');
            let currentSlide = 0;
            
            // Auto advance slides
            const slideInterval = setInterval(() => {
                // Move to next slide
                currentSlide = (currentSlide + 1) % slides.length;
                
                // Update slides
                slides.forEach((slide, index) => {
                    slide.classList.toggle('active', index === currentSlide);
                });
                
                // Update dots
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlide);
                });
            }, 4000);
            
            // Add click events to dots
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideIndex = parseInt(this.dataset.index);
                    currentSlide = slideIndex;
                    
                    // Update slides
                    slides.forEach((slide, index) => {
                        slide.classList.toggle('active', index === currentSlide);
                    });
                    
                    // Update dots
                    dots.forEach((dot, index) => {
                        dot.classList.toggle('active', index === currentSlide);
                    });
                    
                    // Reset interval
                    clearInterval(slideInterval);
                });
            });
            
            // Stop interval when user interacts with slideshow
            const slideshowContainer = tripElement.querySelector('.slideshow-container');
            slideshowContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
        }

        // Show Image in Fullscreen Modal
        function showImageInModal(imageSrc) {
            modalImage.src = imageSrc;
            imageModal.style.display = 'flex';
        }

        // Setup Event Listeners
        function setupEventListeners() {
            // Mobile Menu Toggle
            mobileMenuBtn.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                this.innerHTML = mainNav.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });

            // Navigation Links
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Update active nav link
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Close mobile menu if open
                    if (mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                    
                    // Show selected page
                    const pageId = this.dataset.page;
                    showPage(pageId);
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                });
            });

            // View All Trips Button
            viewAllTripsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active nav link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                document.querySelector('a[data-page="blog"]').classList.add('active');
                
                // Show blog page
                showPage('blog');
                
                // Scroll to top
                window.scrollTo(0, 0);
            });

            // View Full Story Links (Event delegation)
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('view-full-story') || 
                    e.target.closest('.view-full-story')) {
                    e.preventDefault();
                    
                    const link = e.target.classList.contains('view-full-story') ? 
                        e.target : e.target.closest('.view-full-story');
                    
                    const tripId = parseInt(link.dataset.id);
                    const trip = tripsData.find(t => t.id === tripId);
                    
                    if (trip) {
                        // Update active nav link
                        navLinks.forEach(navLink => navLink.classList.remove('active'));
                        document.querySelector('a[data-page="blog"]').classList.add('active');
                        
                        // Show blog page
                        showPage('blog');
                        
                        // Scroll to the specific trip
                        setTimeout(() => {
                            const tripElement = document.querySelector(`.blog-trip[data-id="${tripId}"]`);
                            if (tripElement) {
                                tripElement.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 100);
                    }
                }
                
                // Book Slot Buttons (Event delegation)
                if (e.target.classList.contains('book-slot-btn') || 
                    e.target.closest('.book-slot-btn')) {
                    e.preventDefault();
                    
                    const button = e.target.classList.contains('book-slot-btn') ? 
                        e.target : e.target.closest('.book-slot-btn');
                    
                    const tripId = parseInt(button.dataset.id);
                    const trip = tripsData.find(t => t.id === tripId);
                    
                    if (trip) {
                        openBookingPage(trip);
                    }
                }
            });

            // WhatsApp Bubble
            whatsappBubble.addEventListener('click', function() {
                const phoneNumber = "919876543210";
                const message = "Hello Team Vazhiyarikil! I'm interested in your travel adventures and would like to know more about upcoming trips.";
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappURL, '_blank');
            });

            // Booking Form Submission
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const fullName = document.getElementById('fullName').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('phone').value;
                const participants = document.getElementById('participants').value;
                const message = document.getElementById('message').value;
                
                // Create WhatsApp message
                const whatsappMessage = 
`Hello Team Vazhiyarikil!

I would like to book a slot for:
Trip: ${currentBookingTrip.name}
Date: ${currentBookingTrip.date}
Location: ${currentBookingTrip.location}

My Details:
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Number of Participants: ${participants}
${message ? `Additional Notes: ${message}` : ''}

Please let me know about availability and payment details.`;

                // Open WhatsApp with pre-filled message
                const phoneNumber = "919876543210";
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappURL, '_blank');
                
                // Reset form
                bookingForm.reset();
                
                // Show confirmation
                alert("You're being redirected to WhatsApp to complete your booking. Please send the pre-filled message to confirm your booking.");
            });

            // Close Image Modal
            closeModal.addEventListener('click', function() {
                imageModal.style.display = 'none';
            });
            
            // Close modal when clicking outside the image
            imageModal.addEventListener('click', function(e) {
                if (e.target === imageModal) {
                    imageModal.style.display = 'none';
                }
            });
        }

        // Show Specific Page
        function showPage(pageId) {
            // Hide all pages
            pages.forEach(page => {
                page.style.display = 'none';
            });
            
            bookingPage.style.display = 'none';
            
            // Show selected page
            if (pageId === 'home' || pageId === 'blog' || pageId === 'trips' || pageId === 'about') {
                document.getElementById(pageId).style.display = 'block';
            }
        }

        // Open Booking Page
        function openBookingPage(trip) {
            currentBookingTrip = trip;
            
            // Set booking trip info
            bookingTripInfo.innerHTML = `
                <h3 style="color: var(--primary); margin-bottom: 20px;">Booking: ${trip.name}</h3>
                <p><strong>Date:</strong> ${trip.date}</p>
                <p><strong>Location:</strong> ${trip.location}</p>
                <p><strong>Status:</strong> <span class="upcoming" style="padding: 3px 10px; border-radius: 15px; color: white; font-size: 0.9rem;">Upcoming</span></p>
                <p style="margin-bottom: 30px;">${trip.description}</p>
                <hr style="margin: 30px 0;">
            `;
            
            // Show booking page
            showPage('home');
            bookingPage.style.display = 'block';
            
            // Scroll to booking page
            setTimeout(() => {
                bookingPage.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    