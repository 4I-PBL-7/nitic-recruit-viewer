import { Text } from 'components/Text'
import styles from 'styles/components/SearchJobForm.module.css'

type SearchFormFilterKey = { name: string; key: string }
export type SearchFormData = {
  keyword: string
  filterKey: SearchFormFilterKey[]
  sortKey: string
}
type Props = {
  onSubmit: () => void
  onChange: () => void
  filters: FilterAttr[]
  sorts: SortAttr[]
  formData: SearchFormData
  setFormData: (formData: SearchFormData) => void
}

export const SearchJobForm: React.FC<Props> = ({
  onSubmit,
  onChange,
  filters,
  sorts,
  formData,
  setFormData,
}) => {
  const onSearchBarChange = (keyword: string) => {
    setFormData({ ...formData, keyword })
  }
  const onSearchFormChange = (
    filterKey: SearchFormFilterKey[],
    sortKey: string
  ) => {
    setFormData({ ...formData, filterKey, sortKey })
  }

  return (
    <div className={styles.wrapper}>
      <SearchBar
        onChange={onChange}
        value={formData.keyword}
        onSubmit={onSubmit}
      />
      <SearchForm
        onSubmit={onSubmit}
        onChange={onChange}
        filters={filters}
        sorts={sorts}
        value={formData}
      />
    </div>
  )
}

type SearchBarProps = {
  value: string
  onSubmit: () => void
  onChange: (keyword: string) => void
}
const SearchBar: React.FC<SearchBarProps> = ({ value, onSubmit, onChange }) => {
  const _onChange = () => onChange(value)

  return (
    <div className={styles['searchbar-root']}>
      <input
        className={styles['searchbar-input']}
        placeholder="キーワード検索"
        onChange={_onChange}
        onSubmit={onSubmit}
      />
      <button className={styles['searchbar-button']} onClick={onSubmit}>
        {SearchButton}
      </button>
    </div>
  )
}

type Choice = { label: string; key: string }
type FilterAttr = {
  name: string
  choices: Choice[]
}
type SortAttr = {
  name: string
  key: string
}
type SearchFormProps = {
  onSubmit: () => void
  onChange: (value: Omit<SearchFormData, 'keyword'>) => void
  filters: FilterAttr[]
  sorts: SortAttr[]
  value: Omit<SearchFormData, 'keyword'>
}
const SearchForm: React.FC<SearchFormProps> = ({
  onSubmit,
  onChange,
  filters,
  sorts,
  value,
}) => {
  const _onChange = () => onChange(value)

  return (
    <div className={styles['searchform-root']}>
      <div className={styles['searchform-filter']}>
        <Text text="絞り込み" fontSize="md" />
        {filters.map((a) => (
          <div key={a.name} className={styles['searchform-filter-attr']}>
            <Text
              className={styles['searchform-filter-attr-name']}
              text={a.name}
              fontSize="body"
              fontWeight="medium"
            />
            <select
              className={styles['searchform-filter-attr-select']}
              onChange={_onChange}
            >
              <option value="">{a.name + 'を選択'}</option>
              {a.choices.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className={styles['searchform-sort']}>
        <Text text="並び替え" fontSize="md" />
        {sorts.map((a) => (
          <div key={a.key} className={styles['searchform-sort-attr']}>
            <input
              className={styles['searchform-sort-attr-radio']}
              id={a.key}
              type="radio"
              value={a.key}
            />
            <label
              className={styles['searchform-sort-attr-label']}
              htmlFor={a.key}
            >
              <Text text={a.name} fontSize="body" fontWeight="medium" />
            </label>
          </div>
        ))}
      </div>
      <div className={styles['submit-wrapper']}>
        <button className={styles['submit-button']} onClick={onSubmit}>
          <Text text="検索" fontWeight="bold" />
        </button>
      </div>
    </div>
  )
}

const SearchButton = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_310_1501)">
      <path
        d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
        fill="#E8A363"
      />
    </g>
    <defs>
      <clipPath id="clip0_310_1501">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
