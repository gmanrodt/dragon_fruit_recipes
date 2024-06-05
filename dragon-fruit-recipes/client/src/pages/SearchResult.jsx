import React, { useState, useEffect, useLocation } from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

export default function searchResults() {

  async function getSearchResults(){
    const result = await("/api/SearchResult")
    const data = result.json()
    
  }

}