import { getStringVertex } from 'comp-sci-maths-lib/dist/common'
import Graph from 'comp-sci-maths-lib/dist/dataStructures/graph/Graph'
import { StringGraphVertex } from 'comp-sci-maths-lib/dist/types'

test('Simple Graph', () => {
    const myGraph: Graph<StringGraphVertex> = new Graph();

    const VertexA = getStringVertex('A');
    const VertexB = getStringVertex('B');
    const VertexC = getStringVertex('C');
    const VertexD = getStringVertex('D');
    const VertexE = getStringVertex('E');
    const VertexF = getStringVertex('F');
    const VertexG = getStringVertex('G');
    const VertexH = getStringVertex('H');

    myGraph.addBiDirectionalEdge(VertexA, VertexB);
    myGraph.addBiDirectionalEdge(VertexA, VertexC);
    myGraph.addBiDirectionalEdge(VertexB, VertexD);
    myGraph.addBiDirectionalEdge(VertexB, VertexE);
    myGraph.addBiDirectionalEdge(VertexC, VertexD);
    myGraph.addBiDirectionalEdge(VertexD, VertexF);
    myGraph.addBiDirectionalEdge(VertexE, VertexF);
    myGraph.addBiDirectionalEdge(VertexF, VertexH);

    const outfromC= myGraph.getOutgoing(VertexC);
    const outFromCValues = outfromC.map(x => x.to).map(o => o.value);

    expect(outFromCValues.includes('A')).toBeTruthy()
    expect(outFromCValues.includes('D')).toBeTruthy()
    expect(outFromCValues.includes('F')).toBeFalsy()
})