import { Card } from '@/components/Card';
import { historyService, type HistoryItem } from '@/services/history';
import { useEffect, useState } from 'react';

type Props = {
    type?: 'tbm' | 'imc' | 'water' | 'creatine' | 'ideal-weight';
    refreshTrigger?: number;
};

export function HistoryList({ type, refreshTrigger }: Props) {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    useEffect(() => {
        const all = historyService.list();
        const filtered = type ? all.filter((h) => h.type === type) : all;
        setHistory(filtered);
    }, [type, refreshTrigger]);

    if (history.length === 0) return null;

    return (
        <section className="section-shell pt-6">
            <Card title="Últimos cálculos">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                            <tr>
                                <th className="px-6 py-3">Data</th>
                                <th className="px-6 py-3">Resultado</th>
                                <th className="px-6 py-3">Detalhes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {history.map((item) => (
                                <tr key={item.id} className="bg-white dark:bg-gray-900">
                                    <td className="whitespace-nowrap px-6 py-4">
                                        {new Date(item.date).toLocaleDateString('pt-BR')} <br />
                                        <span className="text-xs">{new Date(item.date).toLocaleTimeString('pt-BR')}</span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                        {item.type === 'tbm' && `${Math.round(item.result.calories)} kcal`}
                                        {item.type === 'imc' && `IMC ${item.result.imc.toFixed(2)}`}
                                        {item.type === 'water' && `${item.result.totalLiters} L`}
                                        {item.type === 'creatine' && `${item.result.gramsPerDay} g`}
                                        {item.type === 'ideal-weight' && `${item.result.idealWeight.toFixed(1)} kg`}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.type === 'tbm' && (
                                            <div>
                                                {item.details.weight}kg • {item.details.objective}
                                            </div>
                                        )}
                                        {item.type === 'imc' && (
                                            <div className="truncate max-w-[150px]">
                                                {item.result.classification}
                                            </div>
                                        )}
                                        {item.type === 'water' && (
                                            <div className="text-xs">
                                                Meta diária
                                            </div>
                                        )}
                                        {item.type === 'creatine' && (
                                            <div className="text-xs">
                                                Dose diária
                                            </div>
                                        )}
                                        {item.type === 'ideal-weight' && (
                                            <div className="text-xs">
                                                Fórmula de Devine
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </section>
    );
}
