import { forwardRef } from 'react';


type PrintProps = {
    type: 'tbm' | 'imc' | 'water' | 'creatine' | 'ideal-weight';
    data: any;
};

export const PrintableReport = forwardRef<HTMLDivElement, PrintProps>(({ type, data }, ref) => {
    const date = new Date().toLocaleDateString('pt-BR');

    return (
        <div ref={ref} className="hidden print:block print:p-8">
            <div className="mb-8 flex items-center justify-between border-b pb-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">FitMetrics</h1>
                    <p className="text-sm text-gray-500">Relatório de Resultados</p>
                </div>
                <div className="text-right text-sm text-gray-500">
                    <p>Gerado em: {date}</p>
                    <p>fitmetrics.app</p>
                </div>
            </div>

            {type === 'tbm' && (
                <div className="space-y-6">
                    <section>
                        <h2 className="mb-3 text-lg font-bold uppercase text-gray-800">Resultados Energéticos</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded border p-4">
                                <p className="text-sm text-gray-500">Taxa Metabólica Basal</p>
                                <p className="text-2xl font-bold">{Math.round(data.tbm)} kcal</p>
                            </div>
                            <div className="rounded border p-4">
                                <p className="text-sm text-gray-500">Gasto Diário Total</p>
                                <p className="text-2xl font-bold text-primary">{Math.round(data.tdee)} kcal</p>
                            </div>
                            <div className="rounded border p-4 col-span-2">
                                <p className="text-sm text-gray-500">Calorias para o Objetivo</p>
                                <p className="text-3xl font-bold text-primary">{Math.round(data.calories)} kcal</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="mb-3 text-lg font-bold uppercase text-gray-800">Divisão de Macros</h2>
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-100 uppercase">
                                <tr>
                                    <th className="px-4 py-2">Nutriente</th>
                                    <th className="px-4 py-2">Quantidade</th>
                                    <th className="px-4 py-2">Calorias</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                <tr>
                                    <td className="px-4 py-3">Proteína</td>
                                    <td className="px-4 py-3 font-semibold text-primary">{Math.round(data.proteinG)}g</td>
                                    <td className="px-4 py-3 opacity-60">{Math.round(data.proteinKcal)} kcal</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Carboidratos</td>
                                    <td className="px-4 py-3 font-semibold text-blue-600">{Math.round(data.carbsG)}g</td>
                                    <td className="px-4 py-3 opacity-60">{Math.round(data.carbsKcal)} kcal</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Gorduras</td>
                                    <td className="px-4 py-3 font-semibold text-yellow-600">{Math.round(data.fatG)}g</td>
                                    <td className="px-4 py-3 opacity-60">{Math.round(data.fatKcal)} kcal</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            )}

            {type === 'imc' && (
                <div className="space-y-6">
                    <section className="text-center py-8 bg-gray-50 rounded-xl">
                        <p className="text-gray-500 mb-2">Seu IMC é</p>
                        <h2 className="text-5xl font-bold text-gray-900 mb-2">{data.imc.toFixed(2)}</h2>
                        <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold bg-${data.color}-100 text-${data.color}-700`}>
                            {data.classification}
                        </span>
                    </section>

                    <section>
                        <h3 className="mb-4 font-semibold text-gray-900">Classificação Oficial da OMS:</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Abaixo de 18,5: Abaixo do peso</li>
                            <li>• 18,5 a 24,9: Peso normal</li>
                            <li>• 25,0 a 29,9: Sobrepeso</li>
                            <li>• 30,0 a 34,9: Obesidade Grau I</li>
                            <li>• 35,0 a 39,9: Obesidade Grau II</li>
                            <li>• Maior que 40,0: Obesidade Grau III</li>
                        </ul>
                    </section>
                </div>
            )}

            {type === 'water' && (
                <div className="space-y-6">
                    <section className="text-center py-8 bg-gray-50 rounded-xl">
                        <p className="text-gray-500 mb-2">Meta Diária de Água</p>
                        <h2 className="text-5xl font-bold text-blue-600 mb-2">{data.totalLiters} L</h2>
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-700">
                            {data.totalMl} ml
                        </span>
                    </section>

                    <section className="grid grid-cols-2 gap-4">
                        <div className="rounded border p-4">
                            <p className="text-sm text-gray-500">Cálculo Base</p>
                            <p className="font-bold text-gray-900">{data.mlPerKg} ml/kg</p>
                            <p className="text-xs text-gray-500 mt-1">{data.basis}</p>
                        </div>
                        <div className="rounded border p-4">
                            <p className="text-sm text-gray-500">Faixa Recomendada</p>
                            <p className="font-bold text-gray-900">{data.range.min} - {data.range.max} ml/kg</p>
                        </div>
                    </section>

                    <section>
                        <h3 className="mb-3 font-semibold text-gray-900">Dicas de Hidratação:</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Beba água ao acordar para ativar o metabolismo.</li>
                            <li>• Não espere sentir sede; sede já é sinal de desidratação.</li>
                            <li>• Aumente a ingestão em dias quentes ou durante exercícios.</li>
                            <li>• Monitore a cor da urina: amarelo claro é o ideal.</li>
                        </ul>
                    </section>
                </div>
            )}

            {type === 'creatine' && (
                <div className="space-y-6">
                    <section className="text-center py-8 bg-gray-50 rounded-xl">
                        <p className="text-gray-500 mb-2">Dose Diária Recomendada</p>
                        <h2 className="text-5xl font-bold text-purple-600 mb-2">{data.gramsPerDay} g</h2>
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-bold bg-purple-100 text-purple-700">
                            0,03 g/kg
                        </span>
                    </section>

                    <section className="grid grid-cols-2 gap-4">
                        <div className="rounded border p-4">
                            <p className="text-sm text-gray-500">Manutenção</p>
                            <p className="font-bold text-gray-900">{data.maintenanceRange}</p>
                            <p className="text-xs text-gray-500 mt-1">Uso contínuo</p>
                        </div>
                        <div className="rounded border p-4">
                            <p className="text-sm text-gray-500">Saturação (Opcional)</p>
                            <p className="font-bold text-gray-900">{data.saturation}</p>
                            <p className="text-xs text-gray-500 mt-1">Consulte um profissional</p>
                        </div>
                    </section>

                    <section>
                        <h3 className="mb-3 font-semibold text-gray-900">Como tomar:</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Tome todos os dias, mesmo sem treino.</li>
                            <li>• Preferencialmente com carboidratos para melhor absorção.</li>
                            <li>• O efeito é crônico (acumulativo), não agudo.</li>
                            <li>• Mantenha-se bem hidratado.</li>
                        </ul>
                    </section>
                </div>
            )}

            {type === 'ideal-weight' && (
                <div className="space-y-6">
                    <section className="text-center py-8 bg-gray-50 rounded-xl">
                        <p className="text-gray-500 mb-2">Peso Ideal Estimado</p>
                        <h2 className="text-5xl font-bold text-teal-600 mb-2">{data.idealWeight.toFixed(1)} kg</h2>
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-bold bg-teal-100 text-teal-700">
                            Fórmula de Devine
                        </span>
                    </section>

                    <section className="grid grid-cols-2 gap-4">
                        <div className="rounded border p-4">
                            <p className="text-sm text-gray-500">Faixa Saudável</p>
                            <p className="font-bold text-gray-900">{data.range.min.toFixed(1)} - {data.range.max.toFixed(1)} kg</p>
                            <p className="text-xs text-gray-500 mt-1">Margem de 10%</p>
                        </div>
                        <div className="rounded border p-4">
                            <p className="text-sm text-gray-500">Nota</p>
                            <p className="text-sm text-gray-700">Esta é uma estimativa estatística e não considera massa muscular ou estrutura óssea.</p>
                        </div>
                    </section>
                </div>
            )}

            <div className="mt-12 text-center text-xs text-gray-400 border-t pt-4">
                <p>Este documento é apenas informativo e não substitui orientação profissional.</p>
            </div>
        </div>
    );
});

PrintableReport.displayName = 'PrintableReport';
