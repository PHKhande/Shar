const Expense = require('../models/expenseModel');
const { all } = require('../routes/expenseRoute');


exports.postExpenseInfo = async (req, res, next) => {
    try{
        // if(!req.body.Amount | !req.body.Category | !req.body.Description ){
        //     throw new Error('All fields are mandatory')
        // }
        
        const expAmt = req.body.Amount;
        const category = req.body.Category;
        const desc = req.body.Description;
        console.log(expAmt, category, desc)
        const data = await Expense.create({
            expAmt: expAmt,
            category: category,
            desc: desc
        });
        res.status(201).json({newExpenseData: data});
    } 
    
    catch(err){
        res.status(500).json({error: err})
    }
}


exports.getExpenseInfo = async (req, res, next) => {
    
    try{
        const allExpenses = await Expense.findAll();
        res.status(201).json({allExpensesfromDB: allExpenses })
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

exports.deleteExpense = async (req, res, next) => {

    const delId = req.params.deleId;
    try{
        const delExpense =   await Expense.destroy( { where: { id:delId } });
        res.status(201).json({delUserfromDB: delExpense })
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

