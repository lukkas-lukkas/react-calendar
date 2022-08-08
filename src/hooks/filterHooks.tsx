import IFilter from 'interfaces/IFilter';
import { useSetRecoilState } from 'recoil';
import { stateFilter } from 'state/atom';

export default function useSetFilter() {
    const setFilter = useSetRecoilState(stateFilter);

    return (filter: IFilter) => {
        setFilter(filter);
    };
}
