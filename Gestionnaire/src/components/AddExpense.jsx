import React, {useState} from "react";
import { useExpenseContext } from "../context/ExpenseContext";

const categories = [
    'Alimentation',
    'Logement',
    'Transport',
    'Divertissement',
    'Santé',
    'Éducation',
    'Autres'
];

function AddExpense() {
    const { dispatch } = useExpenseContext();
    const [amount, setAmount] = useState('');
    const [label, setLabel] = useState('');
    const [category, setCategory] = useState('Alimentation');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || !label) return;

        const newExpense = {
            id: Date.now(),
            amount: parseFloat(amount),
            label,
            category
        };

        dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
        setAmount('');
        setLabel('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type = "text" value = {label} onChange = {(e) => setLabel(e.target.value)} placeholder = "Libellé" required />
            <input type = "number" value = {amount} onChange = {(e) => setAmount(e.target.value)} placeholder = "Montant" required />
            <select value = {category} onChange = {(e) => setCategory(e.target.value)}>
                {categories.map((cat) => (
                    <option key = {cat} value = {cat}>{cat}</option>
                ))}
            </select>
            <button type="submit">Ajouter la dépense</button>
        </form>
    );
}

export default AddExpense;