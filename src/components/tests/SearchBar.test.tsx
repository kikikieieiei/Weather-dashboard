import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../SearchBar'
import { describe, it, expect, vi } from 'vitest'

describe('SearchBar', () => {
    it('calls onSearch when form is submitted', () => {
        const mockOnSearch = vi.fn()
        render(<SearchBar onSearch={mockOnSearch} />)

        const input = screen.getByPlaceholderText(/enter city name/i)
        const button = screen.getByText(/search/i)

        fireEvent.change(input, { target: { value: 'Bangkok' } })
        fireEvent.click(button)

        expect(mockOnSearch).toHaveBeenCalledWith('Bangkok')
    })
})