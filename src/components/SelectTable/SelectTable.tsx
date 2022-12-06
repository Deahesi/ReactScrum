import React, {useState} from 'react';
import {SelectTableProps} from "./SelectTable.props";
import styles from "./SelectTable.module.css";
import cn from "classnames";

const SelectTable = ({setCurrentTable, tables, currentTable, loading}: SelectTableProps) => {


    const createTable = () => {
        console.log()
    }

    return (
        <div className={styles.wrapper}>
            {loading ? <p>Loading...</p> :
                tables ?
                    <div className={styles.tables}>
                        {tables.map((table) => (
                            <div onClick={() => setCurrentTable(table.id)} key={table.id} className={cn(styles.table, { [styles.active]: currentTable === table.id })}>
                                {table.name}
                            </div>
                        ))}
                        <div onClick={createTable} className={cn(styles.table)}>
                            Create +
                        </div>
                    </div>
                    :
                    <div>
                        Some error
                    </div>
            }
        </div>

    );
}

export default SelectTable;
