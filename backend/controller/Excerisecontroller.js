const { prisma } = require('../lib/prisma.js')

async function AddExcerise(req, res) {
    const { excerisename, caloriesburned } = req.body
    const user = req.user

    if (!user) {
        return res.json({ status: "Bad", message: "no token" })
    }

    if (typeof excerisename !== 'string' || typeof caloriesburned !== 'number') {
        return res.status(400).send({ status: "Bad", message: "Invalid input" })
    }

    try {
        await prisma.exerciseHistory.create({
            data: {
                excerisename: excerisename,
                caloriesBurned: caloriesburned,
                userId: user.userid
            }
        })

        return res.json({ status: "Ok", message: "Excerise added" })
    } catch (error) {
        return res.status(500).json({ status: "Bad", message: "Something went wrong" })
    }
}

async function ReadExcerise(req, res) {
    const user = req.user

    if (!user) {
        return res.json({ status: "Bad", message: "no token" })
    }

    try {
        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);

        const startOfTomorrow = new Date(startOfToday);
        startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

        const result = await prisma.exerciseHistory.findMany({
            where: {
                userId: parseInt(user.userid),
                createdAt: {
                    gte: startOfToday,
                    lt: startOfTomorrow
                }
            }
        })

        return res.json({ status: "Ok", data: result })
    } catch (error) {
        return res.status(500).json({ status: "Bad", message: "Something went wrong" })
    }
}

module.exports = { AddExcerise, ReadExcerise }