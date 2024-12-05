import React from 'react';
import "../css/style.css"
import {
    Users,
    GraduationCap,
    Globe,
    Home,
    BookOpen,
    Star,
    Clock,
    UserCheck,
    Facebook,
    Twitter,
    Instagram
} from 'lucide-react';

// Carousel Section
const HeaderCarousel = () => {
    const carouselItems = [
        {
            image: '/img/auca.jfif',
            title: 'The Best Online Learning Platform',
            description: 'Discover a world of expert-led courses designed to enhance your skills and advance your career. With flexible scheduling, interactive content, and personalized learning paths, our platform makes education accessible to everyone.'
        },
        {
            image: '/img/stu.jfif',
            title: 'The Best Online Learning Platform',
            description: 'Discover a world of expert-led courses designed to enhance your skills and advance your career. With flexible scheduling, interactive content, and personalized learning paths, our platform makes education accessible to everyone.'
        }
    ];

    return (
        <div className="container-fluid p-0 mb-5">
            <div className="relative">
                {carouselItems.map((item, index) => (
                    <div key={index} className="relative">
                        <img
                            src={item.image}
                            alt="Carousel"
                            className="w-full h-screen object-cover"
                        />
                        <div className="absolute inset-0 bg-black/70 flex items-center">
                            <div className="container">
                                <div className="max-w-2xl">
                                    <h5 className="text-primary uppercase mb-3 animate-slideInDown">
                                        Best Online Courses
                                    </h5>
                                    <h1 className="text-5xl text-white mb-4 animate-slideInDown">
                                        {item.title}
                                    </h1>
                                    <p className="text-xl text-white mb-4">
                                        {item.description}
                                    </p>
                                    <div className="flex space-x-4">
                                        <button className="btn btn-primary animate-slideInLeft">
                                            Read More
                                        </button>
                                        <button className="btn btn-light animate-slideInRight">
                                            Join Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Services Section
const Services = () => {
    const services = [
        {
            icon: <GraduationCap className="text-primary mx-auto mb-4" size={48} />,
            title: 'Skilled Instructors',
            description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
        },
        {
            icon: <Globe className="text-primary mx-auto mb-4" size={48} />,
            title: 'Online Classes',
            description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
        },
        {
            icon: <Home className="text-primary mx-auto mb-4" size={48} />,
            title: 'Home Projects',
            description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
        },
        {
            icon: <BookOpen className="text-primary mx-auto mb-4" size={48} />,
            title: 'Book Library',
            description: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
        }
    ];

    return (
        <div className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="text-center p-6 bg-gray-100 rounded-lg">
                        {service.icon}
                        <h5 className="mb-3 text-xl font-semibold">{service.title}</h5>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// About Section
const About = () => {
    const features = [
        'Expert Industry Instructors',
        'Flexible Online Classes',
        'Accredited Certifications',
        '24/7 Learning Support',
        'Interactive Course Content',
        'Global Learning Community'
    ];

    return (
        <div className="container py-16">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="relative h-[500px]">
                    <img
                        src="/img/about.jpg"
                        alt="About"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div>
                    <h6 className="text-primary uppercase mb-3">About Us</h6>
                    <h1 className="text-4xl mb-4">Welcome to Online Courses</h1>
                    <p className="mb-4">
                        At Online Courses, we're dedicated to transforming education through innovative digital learning solutions.
                        Our platform combines cutting-edge technology with expert instruction to deliver high-quality education to learners worldwide.
                    </p>
                    <p className="mb-4">
                        With over a decade of experience in online education, we've helped thousands of students achieve their learning goals.
                        Our commitment to excellence, personalized learning experiences, and industry-recognized certifications sets us apart as a leader in digital education.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                                <div className="text-primary mr-2">→</div>
                                {feature}
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

// Courses Section
const Courses = () => {
    const courses = [
        {
            image: '/img/course-1.jpg',
            price: 149.00,
            rating: 5,
            reviews: 123,
            title: 'Web Design & Development Course for Beginners',
            instructor: 'John Doe',
            duration: '1.49 Hrs',
            students: 30
        },
        {
            image: '/img/course-2.jpg',
            price: 149.00,
            rating: 5,
            reviews: 123,
            title: 'Web Design & Development Course for Beginners',
            instructor: 'John Doe',
            duration: '1.49 Hrs',
            students: 30
        },
        {
            image: '/img/course-3.jpg',
            price: 149.00,
            rating: 5,
            reviews: 123,
            title: 'Web Design & Development Course for Beginners',
            instructor: 'John Doe',
            duration: '1.49 Hrs',
            students: 30
        }
    ];

    return (
        <div className="container py-16">
            <div className="text-center mb-12">
                <h6 className="text-primary uppercase">Courses</h6>
                <h1 className="text-4xl">Popular Courses</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                        <div className="relative">
                            <img
                                src={course.image}
                                alt="Course"
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute bottom-0 w-full flex justify-center mb-4">
                                <button className="btn btn-primary rounded-l-full">Read More</button>
                                <button className="btn btn-primary rounded-r-full">Join Now</button>
                            </div>
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-bold mb-2">${course.price.toFixed(2)}</h3>
                            <div className="flex justify-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="text-primary" fill="currentColor" size={16} />
                                ))}
                                <span className="ml-2">({course.reviews})</span>
                            </div>
                            <h5 className="text-xl mb-4">{course.title}</h5>
                            <div className="flex border-t pt-4">
                                <div className="flex-1 text-center border-r">
                                    <UserCheck className="text-primary inline mr-2" size={16} />
                                    {course.instructor}
                                </div>
                                <div className="flex-1 text-center border-r">
                                    <Clock className="text-primary inline mr-2" size={16} />
                                    {course.duration}
                                </div>
                                <div className="flex-1 text-center">
                                    <Users className="text-primary inline mr-2" size={16} />
                                    {course.students} Students
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Instructors Section
const Instructors = () => {
    const instructors = [
        { image: '/img/team-1.jpg', name: 'Instructor Name', designation: 'Designation' },
        { image: '/img/team-2.jpg', name: 'Instructor Name', designation: 'Designation' },
        { image: '/img/team-3.jpg', name: 'Instructor Name', designation: 'Designation' },
        { image: '/img/team-4.jpg', name: 'Instructor Name', designation: 'Designation' }
    ];

    return (
        <div className="container py-16">
            <div className="text-center mb-12">
                <h6 className="text-primary uppercase">Instructors</h6>
                <h1 className="text-4xl">Expert Instructors</h1>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
                {instructors.map((instructor, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <img
                                src={instructor.image}
                                alt="Instructor"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div className="flex justify-center -mt-6 mb-4">
                            <div className="bg-white p-2 rounded-full flex space-x-2">
                                <a href="#" className="text-primary"><Facebook /></a>
                                <a href="#" className="text-primary"><Twitter /></a>
                                <a href="#" className="text-primary"><Instagram /></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="text-xl font-semibold">{instructor.name}</h5>
                            <p className="text-gray-500">{instructor.designation}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Testimonials Section
const Testimonials = () => {
    const testimonials = [
        {
            image: '/img/testimonial-1.jpg',
            name: 'Client Name',
            profession: 'Profession',
            quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
        },
        {
            image: '/img/testimonial-2.jpg',
            name: 'Client Name',
            profession: 'Profession',
            quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
        },
        {
            image: '/img/testimonial-3.jpg',
            name: 'Client Name',
            profession: 'Profession',
            quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
        },
        {
            image: '/img/testimonial-4.jpg',
            name: 'Client Name',
            profession: 'Profession',
            quote: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.'
        }
    ];

    return (
        <div className="container py-16">
            <div className="text-center mb-12">
                <h6 className="text-primary uppercase">Testimonial</h6>
                <h1 className="text-4xl">Our Students Say!</h1>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="text-center">
                        <img
                            src={testimonial.image}
                            alt="Testimonial"
                            className="w-20 h-20 rounded-full border-2 border-primary mx-auto mb-4"
                        />
                        <h5 className="text-xl font-semibold">{testimonial.name}</h5>
                        <p className="text-gray-500 mb-4">{testimonial.profession}</p>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <p>"{testimonial.quote}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main Component
const LandingPage = () => {
    return (
        <div>
            <HeaderCarousel />
            <Services />
            <About />
            <Courses />
            <Instructors />
            <Testimonials />
        </div>
    );
};

export default LandingPage;