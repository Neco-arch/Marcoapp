const { prisma } = require('../lib/prisma.js')

async function CreateUsergoal(req, res) {
    const { weightgoal, weightkg, heightcm } = req.body
    const user = req.user

    if (user === null) {
        return res.json({ status: "Bad", message: "no token" })
    }

    if (
        typeof weightgoal !== "number" ||
        typeof weightkg !== "number" ||
        typeof heightcm !== "number"
    ) {
        return res.status(400).send({ status: "Bad", message: "Invalid input" })
    }

    try {
        await prisma.usergoal.create({
            data: {
                weightGoal: weightgoal,
                weightKg: weightkg,
                heightCm: heightcm,
                userId: parseInt(user.userid)
            }
        })
        return res.status(200).send({ status: "Ok", message: "Added" })
    } catch (error) {
        return res.status(500).send({ status: "Bad", message: "Something went wrong", error })
    }
}

async function UpdateUsergoal(req, res) {
    const { weightgoal } = req.body
    const user = req.user

    if (user === null) {
        return res.json({ status: "Bad", message: "no token" })
    }

    if (
        typeof weightgoal !== "number"
    ) {
        return res.status(400).send({ status: "Bad", message: "Invalid input" })
    }

    try {
        await prisma.usergoal.update({
            where: {
                userId: user.userid
            },
            data: {
                weightGoal: weightgoal
            }
        })

        return res.status(200).send({ status: "Ok", message: "Updated" })
    } catch (error) {
        return res.status(500).send({ status: "Bad", message: "Something went wrong" })
    }
}

async function Updatecurrentprogress(req, res) {
    const { weightkg, heightcm } = req.body
    const user = req.user

    if (user === null) {
        return res.json({ status: "Bad", message: "no token" })
    }

    if (
        typeof weightkg !== "number" ||
        typeof heightcm !== "number"
    ) {
        return res.status(400).send({ status: "Bad", message: "Invalid input" })
    }

    try {
        await prisma.usergoal.update({
            where: {
                userId: user.userid
            },
            data: {
                weightKg: weightkg,
                heightCm: heightcm
            }
        })
        return res.status(200).send({ status: "Ok", message: "Updated" })
    } catch (error) {
        return res.status(500).send({ status: "Bad", message: "Something went wrong" })
    }
}

module.exports = { UpdateUsergoal, CreateUsergoal, Updatecurrentprogress }