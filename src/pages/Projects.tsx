import React from 'react';
import { projects } from '../data/projects';
import Card from '../components/UI/Card';

export default function Projects() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map(project => (
                    <Card key={project.id} title={project.title} description={project.description} link={project.link} />
                ))}
            </div>
        </div>
    );
}