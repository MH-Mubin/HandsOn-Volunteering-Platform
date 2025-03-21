const Event = require('../Models/event');

//  Create Event
exports.createEvent = async (req, res) => {
    try {
        const { title, description, date, time, location, category } = req.body;

        if (!title || !description || !date || !time || !location || !category) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newEvent = new Event({
            title,
            description,
            date,
            time,
            location,
            category,
            createdBy: req.user.id
        });

        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

//  Get All Events with Filters
exports.getEvents = async (req, res) => {
    try {
        const { category, location, date } = req.query;
        let filter = {};

        if (category) filter.category = category;
        if (location) filter.location = location;
        if (date) filter.date = date;

        const events = await Event.find(filter);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Join an Event
exports.joinEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        if (event.attendees.includes(req.user.id)) {
            return res.status(400).json({ message: "You have already joined this event" });
        }

        event.attendees.push(req.user.id);
        await event.save();

        res.status(200).json({ message: "Successfully joined the event", event });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
