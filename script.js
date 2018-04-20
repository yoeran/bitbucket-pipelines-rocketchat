/* exported Script */
/* globals console, _, s */

const COLOR_MAP = {
    INPROGRESS: '#e67e22',
    SUCCESSFUL: '#2ecc71',
    FAILED: '#e74c3c'
}

class Script {
    /**
     * @params {object} request
     */
    process_incoming_request({ request }) {
        const key = request.headers['x-event-key']
        const CREATE_STATUS = 'repo:commit_status_created'
        const UPDATE_STATUS = 'repo:commit_status_updated'

        if (key === UPDATE_STATUS || key === CREATE_STATUS) {
            const status = request.content.commit_status

            return {
                content: {
                    text: key === CREATE_STATUS
                        ? `[Started '${status.refname}' pipeline](${status.url}) in ${status.repository.name}`
                        : `[Updated '${status.refname}' pipeline](${status.url}) in ${status.repository.name}`,
                    attachments: [{
                        color: COLOR_MAP[status.state],
                        fields: [
                            {
                                title: 'Repository',
                                value: status.repository.full_name
                            },
                            {
                                title: 'State',
                                value: status.state
                            },
                            {
                                title: 'Commit',
                                value: `${status.commit.hash.substr(0,7)} - ${status.commit.message}`
                            }
                        ]
                    }]
                }
            };
        }
    }
}
