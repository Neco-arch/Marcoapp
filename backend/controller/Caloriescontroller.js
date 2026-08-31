const { prisma } = require('../lib/prisma.js')

async function UpdateCaloriesgoal(req, res) {
    const { newCalories } = req.body
    const user = req.user

    if (!user) {
        return res.status(403).json({ 'status': 'Bad', 'message': 'User doesnt exist' })
    }

    if (!typeof newCalories === 'number') {
        return res.status(403).json({ 'status': 'Bad', 'message': 'Invalid input' })
    }

    try {
        await prisma.user.update({
            where: {
                id: user.userid,
            },
            data: {
                calories_goal: newCalories
            }
        })

        return res.json({ 'status': 'Ok', 'message': 'Updated' })
    } catch (error) {
        return res.status(500).json({ 'status': 'Bad', 'message': 'something went wrong' })
    }
}