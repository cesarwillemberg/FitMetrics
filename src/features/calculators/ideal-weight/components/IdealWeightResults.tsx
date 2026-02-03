import Button from '@/components/Button';
import Card from '@/components/Card';
import StatCard from '@/components/StatCard';
import type { IdealWeightResult } from '../types';
import { useMemo, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { PrintableReport } from '@/components/PrintableReport';

type Props = {
    result: IdealWeightResult | null;
};

export function IdealWeightResults({ result }: Props) {
    const printRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: 'FitMetrics-Peso-Ideal',
    });

    const shareText = useMemo(() => {
        if (!result) return '';
        return [
            'Meu Peso Ideal (Fórmula de Devine):',
            `Estimativa: ${result.idealWeight.toFixed(1)} kg`,
            `Faixa saudável: ${result.range.min.toFixed(1)} - ${result.range.max.toFixed(1)} kg`,
        ].join('\n');
    }, [result]);

    const handleCopy = () => {
        if (!result) return;
        navigator.clipboard?.writeText(shareText);
    };

    const handleWhatsApp = () => {
        if (!result) return;
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    };

    if (!result) return null;

    return (
        <section className="section-shell space-y-4" id="ideal-weight-results">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <StatCard
                    label="Peso Ideal Estimado"
                    value={`${result.idealWeight.toFixed(1)} kg`}
                    sub={result.formula}
                    accent="primary"
                />
                <StatCard
                    label="Faixa Saudável Suggestiva"
                    value={`${result.range.min.toFixed(1)} - ${result.range.max.toFixed(1)} kg`}
                    sub="+/- 10% de variação"
                    accent="secondary"
                />
            </div>

            <Card title="Compartilhar">
                <div className="flex flex-wrap gap-3">
                    <Button variant="secondary" onClick={() => handlePrint()}>
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Exportar PDF
                    </Button>
                    <Button variant="secondary" onClick={handleCopy}>
                        <span className="fa fa-copy" aria-hidden />
                        Copiar
                    </Button>
                    <Button variant="secondary" onClick={handleWhatsApp}>
                        <span className="fa-brands fa-whatsapp" aria-hidden />
                        Enviar no WhatsApp
                    </Button>
                </div>
            </Card>

            <PrintableReport ref={printRef} type="ideal-weight" data={result} />
        </section>
    );
}
