import React from 'react';

const GoogleCalendar: React.FC = () => {
    return (
        <section className="w-full py-20">
            <h1 className="heading text-center">
                NSW <span className="text-red">Calendar</span>
            </h1>
            <div className="w-full flex justify-center my-10">
                <iframe 
                    src="https://calendar.google.com/calendar/embed?src=ba2460c2a8e538a24e3849618875faccea4bdd87ba52a6c57c9d2acff029c414%40group.calendar.google.com&ctz=Australia%2FSydney"
                    style={{ border: 0, width: '1200px', height: '720px' }}
                    frameBorder="0" 
                    scrolling="no"
                />
            </div>
        </section>
    );
};

export default GoogleCalendar;