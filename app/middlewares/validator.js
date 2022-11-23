module.exports = function (req, res, next) {
    const year = req.query.year;
    let start = req.query.start_month;
    let end = req.query.end_month;

    if (!start) {
        start = '01';
    }

    if (!end) {
        end = '12';
    }

    if (start < 1) {
        start = '01';
    }

    if (end > 12) {
        end = '12';
    }

    if (end < start) {
        let aux = end;
        end = start;
        start = aux;
    }

    if (year == 2022 && end > 10) {
        end = '10';
    }

    if (year == 2022 && start > 10) {
        start = '10';
    }

    req.query.start_month = start;
    req.query.end_month = end;
    req.query.tyo = '';
    next();
}