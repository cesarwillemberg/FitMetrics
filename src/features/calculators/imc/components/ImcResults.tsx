import { Card } from '@/components/Card';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { PrintableReport } from '@/components/PrintableReport';
import Button from '@/components/Button';

type Props = {
    result: {
        imc: number;
        classification: string;
        color: string;
    };
};

const colorMap: Record<string, string> = {
    blue: 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400',
    green: 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400',
    yellow: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400',
    orange: 'text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400',
    red: 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400',
    purple: 'text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400',
};

export function ImcResults({ result }: Props) {
    const colorClass = colorMap[result.color] || colorMap.green;
    const printRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: 'FitMetrics-Relatorio-IMC',
    });

    return (
        <Card className="animate-fade-in">
            <div className="flex flex-col items-center justify-center p-6 text-center">
                <p className="mb-2 text-lg font-medium text-gray-500 dark:text-gray-400">Seu IMC é</p>
                <div className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
                    {result.imc.toFixed(2)}
                </div>
                <div className={`rounded-full px-4 py-1.5 text-sm font-bold ${colorClass}`}>
                    {result.classification}
                </div>

                <div className="mt-8 w-full">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Classificação</p>
                    <div className="flex h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                        <div title="Magreza" className="h-full bg-blue-400 flex-[18.5]"></div>
                        <div title="Normal" className="h-full bg-green-500 flex-[6.4]"></div>
                        <div title="Sobrepeso" className="h-full bg-yellow-400 flex-[5]"></div>
                        <div title="Obesidade" className="h-full bg-red-500 flex-[10]"></div>
                    </div>
                    <div className="mt-1 flex justify-between text-[10px] text-gray-500 dark:text-gray-400">
                        <span>18.5</span>
                        <span className="pl-8">25</span>
                        <span className="pl-4">30</span>
                        <span>40</span>
                    </div>
                </div>

                <div className="mt-8">
                    <Button variant="secondary" onClick={() => handlePrint()}>
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Exportar PDF
                    </Button>
                </div>
            </div>

            <PrintableReport ref={printRef} type="imc" data={result} />
        </Card>
    );
}
