import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from '../components/Header';

describe('Header', ()=>{
  it('renders site name and links', ()=>{
    render(<Header />);
    expect(screen.getByText(/Shriya Patel/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  })
})
