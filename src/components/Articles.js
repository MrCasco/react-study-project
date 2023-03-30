import React from 'react';

function Articles({articles}) {
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                <>
                  {(() => {
                    const arr = [];
                    for (let i = 0; i < articles.length; i++) {
                        arr.push(
                          <tr data-testid="article" key={i}>
                            <td data-testid="article-title">{articles[i].title}</td>
                            <td data-testid="article-upvotes">{articles[i].upvotes}</td>
                            <td data-testid="article-date">{articles[i].date}</td>
                          </tr>
                        );
                    }
                      return arr;
                  })()}
                </>
                </tbody>
            </table>
        </div>
    );

}

export default Articles;