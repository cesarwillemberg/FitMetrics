export function ImcReferenceTable() {
    return (
        <div className="mt-8 w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="bg-[#1e5aa0] px-4 py-3 text-left">
                <h3 className="text-sm font-bold uppercase text-white">Veja a interpretação do IMC</h3>
            </div>
            <table className="w-full text-left text-sm">
                <thead className="bg-white dark:bg-gray-800">
                    <tr>
                        <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">IMC</th>
                        <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300">CLASSIFICAÇÃO</th>
                        <th className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-300 text-center">OBESIDADE (GRAU)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white dark:divide-gray-700 dark:bg-gray-800">
                    <tr>
                        <td className="px-4 py-3 uppercase text-gray-500 dark:text-gray-400">Menor que 18,5</td>
                        <td className="px-4 py-3 uppercase text-gray-500 dark:text-gray-400">Magreza</td>
                        <td className="px-4 py-3 text-center uppercase text-gray-500 dark:text-gray-400">0</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 uppercase text-gray-500 dark:text-gray-400">Entre 18,5 e 24,9</td>
                        <td className="px-4 py-3 uppercase text-gray-500 dark:text-gray-400">Normal</td>
                        <td className="px-4 py-3 text-center uppercase text-gray-500 dark:text-gray-400">0</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 uppercase text-gray-500 dark:text-gray-400">Entre 25,0 e 29,9</td>
                        <td className="px-4 py-3 uppercase text-gray-500 dark:text-gray-400">Sobrepeso</td>
                        <td className="px-4 py-3 text-center uppercase text-gray-500 dark:text-gray-400">I</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 uppercase text-gray-500 dark:text-gray-400">Entre 30,0 e 39,9</td>
                        <td className="px-4 py-3 uppercase text-gray-500 dark:text-gray-400">Obesidade</td>
                        <td className="px-4 py-3 text-center uppercase text-gray-500 dark:text-gray-400">II</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 uppercase text-gray-500 dark:text-gray-400">Maior que 40,0</td>
                        <td className="px-4 py-3 uppercase text-gray-500 dark:text-gray-400">Obesidade Grave</td>
                        <td className="px-4 py-3 text-center uppercase text-gray-500 dark:text-gray-400">III</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
