const { getAllPayments } = require('../models/report');

const controller = {};

// Function to handle the GET request for all payments
controller.getDataReport = async (req, res) => {
    try {
        // Call the function to get all payments from the model
        const result = await getAllPayments();

        // Send the response to the client
        res.status(result.code).json({
            status: result.status,
            message: result.message,
            data: result.data || null,
            error: result.error || null
        });

    } catch (err) {
            console.log(err);
            
        res.status(500).json({
            status: false,
            message: 'Internal server error',
            error: err.message
        });
    }
};

module.exports = controller;
