const { prisma } = require('../lib/prisma.js')

async function logfood(req, res) {
    const { carb, protein, fat, foodname, calories } = req.body
    const user = req.user

    console.log(user)

    if (user === null) {
        return res.json({ status: "Bad", message: "no token" })
    }
    if (
        typeof carb !== "number" ||
        typeof protein !== "number" ||
        typeof fat !== "number" ||
        typeof foodname !== "string" ||
        foodname.trim() === ""
    ) {
        return res.status(400).send({ status: "Bad", message: "Invalid input" })
    }

    try {
        await prisma.foodHistory.create({
            data: {
                foodname: foodname,
                carb: carb,
                protein: protein,
                fat: fat,
                calories: calories,
                userId: parseInt(user.userid)
            }
        })

        const prevdata = await prisma.user.findFirst({
            where: {
                id: user.userid
            }
        })

        console.log(prevdata.users_Macronutrients)
        const json_marco = {
            Calories: prevdata.users_Macronutrients?.Calories + calories,
            Carb: prevdata.users_Macronutrients?.Carb + carb,
            Protein: prevdata.users_Macronutrients?.Protein + protein,
            Fat: prevdata.users_Macronutrients?.Fat + fat
        }

        await prisma.user.update({
            where: {
                id: parseInt(user.userid)
            },
            data: {
                users_Macronutrients: json_marco
            }
        })

        return res.status(200).send({ status: "OK", message: "Added food" })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ status: "Bad", message: "Something went wrong" })
    }
}

module.exports = { logfood }