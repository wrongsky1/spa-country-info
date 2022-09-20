import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadNeighborsByCode, selectNeighbors } from "./details-slice";

export const useNeighbors = (borders = []) => {
    const dispatch = useDispatch();
    const neighbors = useSelector(selectNeighbors);

    useEffect(() => {
        if (borders.length) {
            dispatch(loadNeighborsByCode(borders));
        }
    }, [borders, dispatch]);

    return neighbors;
};
