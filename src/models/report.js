const pool = require('../utils/mysql.connect');

// Function to get all payment records and corresponding user information from the database
const getAllPayments = async () => {
    let connection;

    try {
        // Initialize the response message
        let msg = {
            status: false,
            message: 'No payments found',
            code: 404 // Changed to 404 since no payments were found
        };

        // Get a connection from the pool
        connection = await pool.getConnection();

        // Define the SQL query with a JOIN to get data from both 'pagos' and 'usuarios'
        const sql = `
            SELECT 
                p.id_pago, p.id_poliza, p.monto_pago, p.fecha_pago, p.metodo_pago, 
                p.referencia, p.banco, p.transaction_id, p.sypago, p.status, p.email, p.aliado,p.plan,p.estado,p.empresa,
                u.nombre, u.apellido, u.telefono -- Include the fields you need from 'usuarios'
            FROM pagos p
            INNER JOIN usuarios u ON p.email = u.email
        `;

        // Execute the SQL query
        const [rows] = await connection.execute(sql);

        // Check if rows are found
        if (rows.length > 0) {
            msg = {
                status: true,
                message: 'Payments and corresponding user data found',
                code: 200,
                data: rows // Include the combined data in the response
            };
        }

        return msg;

    } catch (err) {
        // Handle any errors that occurred during the process
        return {
            status: false,
            message: 'Server error',
            code: 500,
            error: err.message // Return a more descriptive error message
        };
    } finally {
        // Release the connection back to the pool
        if (connection) {
            connection.release();
        }
    }
};

module.exports = {
    getAllPayments
};
