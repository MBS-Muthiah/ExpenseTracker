import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
  // Reset categories once when the hook is called (can be moved to an effect if needed)
  resetCategories();

  const { transactions } = useContext(ExpenseTrackerContext);

  // Filter transactions based on the type (Income/Expense)
  const rightTransactions = transactions.filter((t) => t.type === title);

  // Calculate the total amount for the selected type
  const total = rightTransactions.reduce((acc, currVal) => acc + currVal.amount, 0);

  // Select the categories based on type
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  // Create a new array of categories with updated amounts
  const updatedCategories = categories.map((category) => {
    const categoryTransactions = rightTransactions.filter((t) => t.category === category.type);
    const categoryAmount = categoryTransactions.reduce((acc, currVal) => acc + currVal.amount, 0);
    return { ...category, amount: categoryAmount };
  });

  // Filter out categories with 0 amount
  const filteredCategories = updatedCategories.filter((sc) => sc.amount > 0);

  // Prepare data for chart
  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type),
  };

  return { filteredCategories, total, chartData };
};

export default useTransactions;
