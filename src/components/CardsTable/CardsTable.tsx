'use client'

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useCallback, useEffect, useState } from 'react';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { getCards } from '@/service/service';
import { Card } from '@/service/models';
import cn from 'classnames';
import styles from './CardsTable.module.scss';
import 'ag-grid-enterprise';
import { useSearchParams } from 'next/navigation';

export const CardsTable = () => {
    const [rowData, setRowData] = useState<Card[]>([]);
    const query = useSearchParams();
    const shopId = query.get('shopId');
    
    const [colDefs] = useState<ColDef[]>([
        { headerName: 'Название', field: "name", rowDrag: true},
        { headerName: 'Статус', field: "status"},
        { headerName: 'Id магазина', field: "shopId", flex: 1 },
    ]);

    useEffect(() => {
        getCards().then((cards: Card[]) => {
            console.log(cards);
            setRowData(cards);
        })
    }, []);

    const onGridReady = useCallback((params: GridReadyEvent) => {
        if (shopId) {
            params.api.setFilterModel({
                shopId: {
                    type: 'equals',
                    filter: shopId
                }
            })
        }
    }, [shopId]);

    return (
        // wrapping container with theme & size
        <div className={cn("ag-theme-quartz", styles.tableDiv)}>
            <AgGridReact
                defaultColDef={{floatingFilter: true, filter: 'agTextColumnFilter'}}
                rowGroupPanelShow='always'
                rowData={rowData}
                columnDefs={colDefs}
                rowDragManaged={true}
                onGridReady={onGridReady}
            />
        </div>
    )  
}
