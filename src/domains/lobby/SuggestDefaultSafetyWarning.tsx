import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import React from 'react';
import { Link } from 'rebass';
const defaultInfoQuery = loader("../../stores/queries/defaultInformations.graphql");

export function SuggestDefaultSafetyWarning({ onChange }: {
    onChange?(text: string): void
}) {
    const { loading, data, error } = useQuery(defaultInfoQuery)

    if (loading || error) return null

    if (!data.defaultInformations?.safetyInstructions) return null

    return <Link ml={2} color="secondary" onClick={() => {
        onChange!(data.defaultInformations.safetyInstructions)
    }}>
        Usar o padrão
    </Link>
}