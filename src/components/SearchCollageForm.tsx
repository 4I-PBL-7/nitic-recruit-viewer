import styles from 'styles/components/SearchCollageForm.module.css'
import { Text } from 'components/Text'
import { ChangeEvent } from 'react'

export type SearchFormFilterKey = { name: string; key: string }
export type SearchFormData = {
  keyword: string
  filterKey: SearchFormFilterKey[]
  sortKey: string
}
type Props = {
  onSubmit: () => void
  filters: FilterAttr[]
  sorts: SortAttr[]
  formData: SearchFormData
  setFormData: (formData: SearchFormData) => void
}

export const SearchCollageForm: React.FC<Props> = ({
  onSubmit,
  filters,
  sorts,
  formData,
  setFormData,
}) => {
  const onSearchBarChange = (keyword: string) => {
    setFormData({
      keyword,
      filterKey: formData.filterKey,
      sortKey: formData.sortKey,
    })
  }
  const onSearchFormChange = (
    value: Pick<SearchFormData, 'filterKey' | 'sortKey'>
  ) => {
    setFormData({
      keyword: formData.keyword,
      filterKey: value.filterKey,
      sortKey: value.sortKey,
    })
  }

  return (
    <div className={styles.wrapper}>
      <SearchBar
        onChange={onSearchBarChange}
        value={formData.keyword}
        onSubmit={onSubmit}
      />
      <SearchForm
        onSubmit={onSubmit}
        onChange={onSearchFormChange}
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
  const _onChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value ?? '')

  return (
    <div className={styles['searchbar-root']}>
      <input
        className={styles['searchbar-input']}
        placeholder="キーワード検索"
        value={value}
        type="text"
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
  fieldName: string
  choices: Choice[]
}
type SortAttr = {
  name: string
  key: string
}
type SearchFormProps = {
  onSubmit: (value: Pick<SearchFormData, 'filterKey' | 'sortKey'>) => void
  onChange: (value: Pick<SearchFormData, 'filterKey' | 'sortKey'>) => void
  filters: FilterAttr[]
  sorts: SortAttr[]
  value: Pick<SearchFormData, 'filterKey' | 'sortKey'>
}
const SearchForm: React.FC<SearchFormProps> = ({
  onSubmit,
  onChange,
  filters,
  sorts,
  value,
}) => {
  const onFilterChanged =
    (attr: FilterAttr) => (e: ChangeEvent<HTMLSelectElement>) => {
      const selected = e.target.value
      const filterKey = [
        ...value.filterKey,
        { name: attr.fieldName, key: selected },
      ]
      const newValue = {
        filterKey,
        sortKey: value.sortKey,
      }

      onChange(newValue)
    }
  const onSortChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.value
    const newValue = {
      filterKey: value.filterKey,
      sortKey: selected,
    }

    onChange(newValue)
  }

  const _onSubmit = () => onSubmit(value)

  return (
    <div className={styles['searchform-root']}>
      <div className={styles['searchform-filter']}>
        <Text text="絞り込み" fontSize="md" fontWeight="bold" />
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
              onChange={onFilterChanged(a)}
            >
              <option value="">{a.name + 'を選択'}</option>
              {a.choices.map((c) => (
                <option key={c.key} value={c.label}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className={styles['searchform-sort']}>
        <Text text="並び替え" fontSize="md" fontWeight="bold" />
        {sorts.map((a) => (
          <div key={a.key} className={styles['searchform-sort-attr']}>
            <input
              className={styles['searchform-sort-attr-radio']}
              id={a.key}
              type="radio"
              value={a.key}
              onChange={onSortChanged}
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
        <button className={styles['submit-button']} onClick={_onSubmit}>
          <Text
            text="検索"
            fontWeight="bold"
            className={styles['submit-button-text']}
          />
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
        fill="#CE5E5E"
      />
    </g>
    <defs>
      <clipPath id="clip0_310_1501">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
