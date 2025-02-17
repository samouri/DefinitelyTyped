export = CompositeVisualization;
declare function CompositeVisualization(definition: any): void;
declare class CompositeVisualization {
    constructor(definition: any);
    layout_: string[];
    items_: Record<string, CompositeVisualizationSlot>;
    autoCreateFilters_: boolean;
    adjustItemHeadersAndFooters: boolean;
    canExport: boolean;
    private cssExtractor_;
    private addSlot_;
    private handleItemHeadersAndFooters_;
    getExportableData(): Array<{
        formats: Array<{
            name: string;
            processKey: number;
        }>;
        getExporter: () => any;
        getRawDataExporter: () => any;
        title: string;
    }>;
    hasData(): boolean;
    setPath(value: any): void;
    path_: any;
    protected initFilters_(): void;
    filters: VisualizationFilters;
    private createFiltersFromItems_;
    private populateSlots_;
    private prepareFilterValues_;
    queryData(filterValues: Record<string, any>): void;
    render(outputObj: any): void;
    private validateLayout_;
}
declare namespace CompositeVisualization {
    export { VisualizationDef };
}
import CompositeVisualizationSlot = require('./CompositeVisualizationSlot.js');
import VisualizationFilters = require('./VisualizationFilters.js');
type VisualizationDef = import('./VisualizationDef');
