class StudentController {
    static set_cookie(req, res) {
        res.cookie('cookie_name', 'cookie_value',{maxAge: 10000, httpOnly: true});
        res.send('Cookie has been set');

    }

    static get_cookie(req, res) {
        res.send(req.cookies);
    }

    static delete_cookie(req, res) {
        res.clearCookie('cookie_name');
        res.send('Cookie has been deleted');
    }
}

export default StudentController;