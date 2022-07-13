import React, { useRef, createContext } from 'react'
import useCurrentSheet from './states/useCurrentSheet'
import useSelectedEntry from './states/useSelectedEntry'
import useNewEntry from './states/useNewEntry'
import useSheetPageView from './states/useSheetPageView'
import useSheetLoading from './states/useSheetLoading'
import useEntryMenu from './states/useEntryMenu'

const SheetContext = createContext()

const SheetProvider = ({ children }) => {
  const { currentSheet, setCurrentSheet } = useCurrentSheet();
  const { selectedEntry, setSelectedEntry } = useSelectedEntry();
  const { newEntry, setNewEntry } = useNewEntry();
  const { sheetPageView, setSheetPageView } = useSheetPageView();
  const { sheetLoading, setSheetLoading } = useSheetLoading();
  const { entryMenu, setEntryMenu } = useEntryMenu();
  const sheetScroll = useRef(0);
  const prevPath = useRef('');

  const sheet = {

    /* STATES */
    currentSheet,
    selectedEntry,
    newEntry,
    sheetPageView,
    sheetLoading,
    entryMenu,

    /* SETTERS */
    setCurrentSheet,
    setSelectedEntry,
    setNewEntry,
    setSheetPageView,
    setSheetLoading,
    setEntryMenu,

    /* EFFECTS */


    /* REFS */
    sheetScroll,
    prevPath,
  }

  return (
    <SheetContext.Provider value={{ sheet }}>
      { children }
    </SheetContext.Provider>
  )
}

export { SheetContext, SheetProvider };